package web

import (
	"embed"
	"fmt"
	"html/template"
	"io"
	"path"
)

type Templater struct {
	fileSystem embed.FS
}

func NewTemplater(fileSystem embed.FS) *Templater {
	return &Templater{fileSystem: fileSystem}
}

func (t *Templater) Get(templatePath string) (*template.Template, error) {
	tmpl, err := template.ParseFS(t.fileSystem, path.Join("templates", templatePath))
	if err != nil {
		return nil, fmt.Errorf("failed to parse template %s: %w", templatePath, err)
	}

	return tmpl, nil
}

func (t *Templater) Write(templatePath string, data any, writer io.Writer) error {
	tmpl, err := t.Get(templatePath)
	if err != nil {
		return err
	}

	if err := tmpl.Execute(writer, data); err != nil {
		return fmt.Errorf("failed to execute template %s: %w", templatePath, err)
	}

	return nil
}
