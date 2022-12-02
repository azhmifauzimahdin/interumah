import React from "react"
import "./Print.css"

interface PrintProps {
    className?: string
}
const Print: React.FC<PrintProps> = props => {
    const { className } = props
    return (
        <svg className={`print ${className}`} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.75 18H11.25C7.515 18 4.5 21.015 4.5 24.75V38.25H13.5V47.25H40.5V38.25H49.5V24.75C49.5 21.015 46.485 18 42.75 18ZM36 42.75H18V31.5H36V42.75ZM42.75 27C41.5125 27 40.5 25.9875 40.5 24.75C40.5 23.5125 41.5125 22.5 42.75 22.5C43.9875 22.5 45 23.5125 45 24.75C45 25.9875 43.9875 27 42.75 27ZM40.5 6.75H13.5V15.75H40.5V6.75Z" />
        </svg>

    )
}

export default Print