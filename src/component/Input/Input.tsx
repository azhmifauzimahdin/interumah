import React from "react"
import "./Input.css"

export interface InputProps {
    type: 'text' | 'password' | 'email'
    name: string
    inputType?: 'prepend' | 'search'
    inputValid?: string
    placeholder?: string
    disabled?: boolean
    onFocus?: () => void
    onBlur?: () => void
    onKeyUp?: (e: any) => void
}

const Input: React.FC<InputProps> = props => {
    const { type, name, inputType, placeholder, disabled, onFocus, onBlur, onKeyUp } = props
    const inputValid = props.inputValid || ''

    return (
        <input
            type={type}
            name={name}
            className={`form-control fc-type-${inputType} ${inputValid}`}
            placeholder={placeholder}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyUp={onKeyUp}
        />
    )
}

export default Input