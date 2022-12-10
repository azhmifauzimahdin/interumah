import React from "react"
import { IconInfo } from "../Icon"
import "./ErrorMessage.css"

export interface ErrorMessageProps {
    children?: React.ReactNode
    size?: 'sm' | 'md'
}

const ErrorMessage: React.FC<ErrorMessageProps> = props => {
    const size = props.size || 'md'
    const { children } = props
    return (
        <div className="error-message">
            <div className="iconErrorMessage"><IconInfo color="danger" size={size} /></div>
            <span className={`textErrorMessage textErrorMessage-size-${size}`}>{children}</span>
        </div>
    )
}

export default ErrorMessage