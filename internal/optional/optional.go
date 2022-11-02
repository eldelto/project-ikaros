package optional

type Optional[A any] struct {
	isDefined bool
	value     *A
}

func Empty[A any]() Optional[A] {
	return Optional[A]{false, nil}
}

func Of[A any](value A) Optional[A] {
	return Optional[A]{true, &value}
}

func OfPointer[A any](value *A) Optional[A] {
	return Optional[A]{value != nil, value}
}

func (o Optional[A]) IsDefined() bool {
	return o.isDefined
}

func (o Optional[A]) GetOrElse(fallback A) A {
	if o.isDefined {
		return *o.value
	}

	return fallback
}
