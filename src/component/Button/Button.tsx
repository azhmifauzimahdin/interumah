import React from "react"
import './Button.css'

export interface ButtonProps {
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    button?: 'btn' | 'btnInput' | 'btnProduct'
    fontSize?: 'sm' | 'md' | 'lg'
    type?: 'primary' | 'secondary' | 'colorfull'
    size?: 'sm' | 'md' | 'lg'
    fontWeight?: 'normal' | 'bold'
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = props => {
    const button = props.button || 'btn'
    const fontSize = props.fontSize || 'md'
    const type = props.type || 'primary'
    const size = props.size || 'md'
    const fontWeight = props.fontWeight || 'bold'
    const cek = !props.disabled ? `${button} btn-size-${size} btn-${type} btn-${fontWeight} btn-font-${fontSize}` : `${button} btn-size-${size} btn-${fontWeight} btn-font${fontSize} btn-disabled`

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