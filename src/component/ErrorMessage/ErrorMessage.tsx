import React from "react"
import { IconInfo } from "../Icon"
import "./ErrorMessage.css"

export interface ErrorMessageProps {
    children?: React.ReactNode
}

const ErrorMessage: React.FC<ErrorMessageProps> = props => {
    const { children } = props
    return (
        <div className="error-message">
            <div className="iconErrorMessage"><IconInfo color="danger" /></div>
            <span className="textErrorMessage">{children}</span>
        </div>
    )
}

export default ErrorMessage