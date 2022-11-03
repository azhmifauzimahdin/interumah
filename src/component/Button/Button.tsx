import React from "react"
import './Button.css'

export interface ButtonProps {
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    button?: 'btn' | 'btnInput'
    type?: 'primary' | 'secondary'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = props => {
    const button = props.button || 'btn'
    const type = props.type || 'primary'
    const size = props.size || 'md'
    const cek = !props.disabled ? `${button} btn-${size} btn-${type}` : `${button} btn-${size} btn-disabled`

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