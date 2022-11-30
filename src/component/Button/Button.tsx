import React from "react"
import './Button.css'

export interface ButtonProps {
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    button?: 'btn' | 'btnInput' | 'btnSearch' | 'btnProduct'
    fontSize?: 'sm' | 'md' | 'lg'
    type?: 'primary' | 'secondary' | 'colorfull' | 'gray' | 'estimate' | 'green'
    size?: 'sm' | 'md' | 'lg'
    fontWeight?: 'normal' | 'bold'
    className?: string
    disabled?: boolean
    name?: any
}

const Button: React.FC<ButtonProps> = props => {
    const { name, className } = props
    const button = props.button || 'btn'
    const fontSize = props.fontSize || 'md'
    const type = props.type || 'primary'
    const size = props.size || 'md'
    const fontWeight = props.fontWeight || 'bold'
    const cek = !props.disabled ? `${button} btn-size-${size} btn-${type} btn-${fontWeight} btn-font-${fontSize} ${className}` : `${button} btn-size-${size} btn-${fontWeight} btn-font${fontSize} ${className} btn-disabled`

    return (
        <button
            className={cek}
            onClick={props.onClick}
            disabled={props.disabled}
            name={name}
        >
            {props.children}
        </button>
    )
}

export default Button