import React from "react"
import "./Info.css"

export interface InfoProps {
    color?: 'primary' | 'danger'
}

const Info: React.FC<InfoProps> = props => {
    const color = props.color || 'primary'
    return (
        <svg className={`info info-${color}`} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" />
            <path d="M6.95651 3.82619C6.95651 3.2499 7.42369 2.78271 7.99999 2.78271C8.57629 2.78271 9.04347 3.2499 9.04347 3.82619V8.00011C9.04347 8.5764 8.57629 9.04358 7.99999 9.04358C7.42369 9.04358 6.95651 8.5764 6.95651 8.00011V3.82619Z" fill="#ffffff" />
            <path d="M6.95651 12.1738C6.95651 11.5976 7.42369 11.1304 7.99999 11.1304C8.57629 11.1304 9.04347 11.5976 9.04347 12.1738C9.04347 12.7501 8.57629 13.2173 7.99999 13.2173C7.42369 13.2173 6.95651 12.7501 6.95651 12.1738Z" fill="#ffffff" />
        </svg>

        // <img
        //     src={IconInfo}
        //     alt={alt}
        //     className={`info info-${size} info-${color}`}
        // />
    )
}

export default Info