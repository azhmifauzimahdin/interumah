import React from "react"
import './Button.css'

export interface ButtonProps {
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: 'primary' | 'secondary'
    size?: 'sm' | 'md' | 'lg'
    cek?: boolean
}

const Button: React.FC<ButtonProps> = props => {
    const type = props.type || 'primary'
    const size = props.size || 'md'
    const cek = !props.cek ? `btn btn-${size} btn-${type}` : `btn btn-${size} btn-disabled`

    return (
        <button
            className={cek}
            onClick={props.onClick}
            disabled={props.cek}
        >
            {props.children}
        </button>
    )
}

export default Button