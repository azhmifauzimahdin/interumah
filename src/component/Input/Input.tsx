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
    onFocus?: () => void
    onBlur?: () => void
    onKeyUp?: (e: any) => void
    onChange?: () => void
}

const Input: React.FC<InputProps> = props => {
    const { type, name, inputType, placeholder, disabled, onFocus, onBlur, onKeyUp, onChange } = props
    const inputValid = props.inputValid || ''
    const size = props.size || 'md'

    return (
        <input
            type={type}
            name={name}
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