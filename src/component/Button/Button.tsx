import React from "react"
import './Button.css'

export interface ButtonProps {
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: 'primary' | 'secondary'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = props => {
    const type = props.type || 'primary'
    const size = props.size || 'md'
    const cek = !props.disabled ? `btn btn-${size} btn-${type}` : `btn btn-${size} btn-disabled`

    return (
        <button
            className={cek}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button