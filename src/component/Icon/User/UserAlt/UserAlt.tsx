import React from "react"
import "./UserAlt.css"

interface UserAltProps {
    className?: string
    color?: 'white' | 'gray'
}
const UserAlt: React.FC<UserAltProps> = props => {
    const { className } = props
    const color = props.color || 'white'
    return (
        <svg className={`userAlt userAlt-color-${color} ${className}`} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 7.08333C10.0073 7.08333 11.6218 5.49667 11.6218 3.54167C11.6218 1.58667 10.0073 0 8 0C5.99273 0 4.36364 1.58667 4.36364 3.54167C4.36364 5.49667 5.99273 7.08333 8 7.08333ZM8 9.91667C5.33818 9.91667 0 11.22 0 13.8125V17H16V13.8125C16 11.22 10.6618 9.91667 8 9.91667Z" />
        </svg>

    )
}

export default UserAlt