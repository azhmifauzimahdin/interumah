import React from "react"
import "./Input.css"

export interface InputProps {
    type: 'text' | 'password' | 'email'
    name: string
    className?: string
    placeholder?: string
    disabled?: boolean
    onFocus?: () => void
    onBlur?: () => void
    onKeyUp?: (e: any) => void
}

const Input: React.FC<InputProps> = props => {
    const { type, name, className, placeholder, disabled, onFocus, onBlur, onKeyUp } = props

    return (
        <input
            type={type}
            name={name}
            className={`form-control ${className}`}
            placeholder={placeholder}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyUp={onKeyUp}
        />
    )
}

export default Input