import React from "react"
import "./Input.css"

export interface InputProps {
    type: 'text' | 'password' | 'email'
    size?: 'sm' | 'md'
    name: string
    inputType?: 'prepend' | 'search'
    inputValid?: string
    placeholder?: string
    disabled?: boolean
    defaultValue?: string
    value?: string
    onFocus?: () => void
    onBlur?: () => void
    onKeyUp?: (e: any) => void
}

const Input: React.FC<InputProps> = props => {
    const { type, name, inputType, placeholder, disabled, defaultValue, value, onFocus, onBlur, onKeyUp } = props
    const inputValid = props.inputValid || ''
    const size = props.size || 'md'

    return (
        <input
            type={type}
            name={name}
            value={value}
            defaultValue={defaultValue}
            className={`form-control fc-type-${inputType} fc-size-${size} ${inputValid}`}
            placeholder={placeholder}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyUp={onKeyUp}
        />
    )
}

export default Input