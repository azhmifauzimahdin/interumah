import React from "react"
import './Button.css'

export interface ButtonProps {
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: 'primary' | 'secondary'
    size?: 'sm' | 'md' | 'lg'
}

const Button: React.FC<ButtonProps> = props => {
    const type = props.type || 'primary'
    const size = props.size || 'md'

    return (
        <button
            className={`btn btn-${size} btn-${type}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button