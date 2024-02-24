export interface SelectProps extends Record<string, any> {
    returnScalarValue?: boolean,
    label?: string,
    name?: string,
    options?: any[],
    control?: any,
    errors?: any,
    required?: boolean,
    rule?: any,
    value?: any,
    onChange?: any,
}

export interface ContextProps extends SelectProps {

}