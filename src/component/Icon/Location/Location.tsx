import React from "react"
import "./Location.css"

interface LocationProps {
    color?: 'blue' | 'white'
}

const Location: React.FC<LocationProps> = props => {
    const color = props.color || 'blue'
    return (
        <svg className={`location location-color-${color}`} viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.05817 0C3.15601 0 0 3.13 0 7C0 12.25 7.05817 20 7.05817 20C7.05817 20 14.1163 12.25 14.1163 7C14.1163 3.13 10.9603 0 7.05817 0ZM7.05817 9.5C5.6667 9.5 4.5374 8.38 4.5374 7C4.5374 5.62 5.6667 4.5 7.05817 4.5C8.44964 4.5 9.57895 5.62 9.57895 7C9.57895 8.38 8.44964 9.5 7.05817 9.5Z" />
        </svg>
    )
}

export default Location