import React from "react"
import "./Notification.css"

export interface NotificationProps {
    color?: 'primary'
    size?: 'md'
}
const Notification: React.FC<NotificationProps> = props => {
    const color = props.color || 'primary'
    const size = props.size || 'md'

    return (
        <svg className={`notification notification-color-${color} notification-size-${size}`} viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 48C25.025 48 27.5 45.7846 27.5 43.0769H16.5C16.5 45.7846 18.9475 48 22 48ZM38.5 33.2308V20.9231C38.5 13.3662 33.99 7.04 26.125 5.36615V3.69231C26.125 1.64923 24.2825 0 22 0C19.7175 0 17.875 1.64923 17.875 3.69231V5.36615C9.9825 7.04 5.5 13.3415 5.5 20.9231V33.2308L0 38.1538V40.6154H44V38.1538L38.5 33.2308Z" fill="#B7B7B7" />
        </svg>

    )
}

export default Notification