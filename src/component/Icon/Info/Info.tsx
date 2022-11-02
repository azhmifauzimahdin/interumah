import React from "react"
import { Info } from "../../../assets/index"
import "./Info.css"

export interface InfoProps {
    alt?: string
    color?: 'primary' | 'error'
    size?: 'sm' | 'md' | 'lg'
}

const Button: React.FC<InfoProps> = props => {
    const color = props.color || 'primary'
    const size = props.size || 'md'
    const alt = props.alt

    return (
        <img
            src={Info}
            alt={alt}
            className={`IconInfo info-${size} info-${color}`}
        />
    )
}

export default Button