package conf

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

type ConfigProvider interface {
	GetString(key string) (string, error)
	GetFloat(key string) (float64, error)
	GetBool(key string) (bool, error)
}

type Provider struct {
	ConfigProvider
}

func (p *Provider) GetStringP(key string, defaultValue ...string) string {
	value, err := p.GetString(key)
	if err != nil {
		if len(defaultValue) > 0 {
			return defaultValue[0]
		}

		panic(err)
	}

	return value
}

func (p *Provider) GetFloatP(key string, defaultValue ...float64) float64 {
	value, err := p.GetFloat(key)
	if err != nil {
		if len(defaultValue) > 0 {
			return defaultValue[0]
		}

		panic(err)
	}

	return value
}

func (p *Provider) GetBoolP(key string, defaultValue ...bool) bool {
	value, err := p.GetBool(key)
	if err != nil {
		if len(defaultValue) > 0 {
			return defaultValue[0]
		}

		panic(err)
	}

	return value
}

type KeyNotFoundError struct {
	Key     string
	message string
}

func NewKeyNotFoundError(key string) *KeyNotFoundError {
	return &KeyNotFoundError{
		Key:     key,
		message: fmt.Sprintf("config value with key '%s' could not be found", key),
	}
}

func (e *KeyNotFoundError) Error() string {
	return e.message
}

type TypeConversionError struct {
	Key     string
	Value   string
	Type    string
	message string
}

func NewTypeConversionError(key, value, typ string) *TypeConversionError {
	return &TypeConversionError{
		Key:     key,
		Value:   value,
		Type:    typ,
		message: fmt.Sprintf("value '%s' of key '%s' cannot be converted to expected type '%s'", value, key, typ),
	}
}

func (e *TypeConversionError) Error() string {
	return e.message
}

type ParsingError struct {
	Line    string
	message string
}

func NewParsingError(line string) *ParsingError {
	return &ParsingError{
		Line:    line,
		message: fmt.Sprintf("could not parse line '%s'", line),
	}
}

func (e *ParsingError) Error() string {
	return e.message
}

type FileConfigProvider struct {
	path  string
	store map[string]string
}

func NewFileConfigProvider(path string) *Provider {
	return &Provider{
		&FileConfigProvider{
			path: path,
		},
	}
}

func (cp *FileConfigProvider) GetString(key string) (string, error) {
	if cp.store == nil {
		m, err := initMapFromFile(cp.path)
		if err != nil {
			return "", err
		}
		cp.store = m
	}

	value, ok := cp.store[key]
	if !ok {
		return "", NewKeyNotFoundError(key)
	}

	return value, nil
}

func (cp *FileConfigProvider) GetFloat(key string) (float64, error) {
	stringValue, err := cp.GetString(key)
	if err != nil {
		return 0, err
	}

	value, err := strconv.ParseFloat(stringValue, 64)
	if err != nil {
		return value, NewTypeConversionError(key, stringValue, "float64")
	}

	return value, nil
}

func (cp *FileConfigProvider) GetBool(key string) (bool, error) {
	stringValue, err := cp.GetString(key)
	if err != nil {
		return false, err
	}
	value, err := strconv.ParseBool(stringValue)
	if err != nil {
		return value, NewTypeConversionError(key, stringValue, "bool")
	}

	return value, nil
}

func initMapFromFile(path string) (map[string]string, error) {
	store := map[string]string{}
	file, err := os.Open(path)
	if err != nil {
		return store, nil
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		tokens := strings.Split(line, "=")
		if len(tokens) != 2 {
			return nil, NewParsingError(line)
		}

		store[tokens[0]] = tokens[1]
	}

	if err := scanner.Err(); err != nil {
		return nil, err
	}

	return store, nil
}

type ChainConfigProvider struct {
	chain []ConfigProvider
}

func NewChainConfigProvider(chain []ConfigProvider) *Provider {
	return &Provider{
		&ChainConfigProvider{
			chain: chain,
		},
	}
}

func (cp *ChainConfigProvider) GetString(key string) (string, error) {
	var value string
	var err error
	for i := range cp.chain {
		value, err = cp.chain[i].GetString(key)
		if err == nil {
			return value, nil
		}
	}

	return "", err
}

func (cp *ChainConfigProvider) GetFloat(key string) (float64, error) {
	var value float64
	var err error
	for i := range cp.chain {
		value, err = cp.chain[i].GetFloat(key)
		if err == nil {
			return value, nil
		}
	}

	return 0, err
}

func (cp *ChainConfigProvider) GetBool(key string) (bool, error) {
	var value bool
	var err error
	for i := range cp.chain {
		value, err = cp.chain[i].GetBool(key)
		if err == nil {
			return value, nil
		}
	}

	return false, err
}
