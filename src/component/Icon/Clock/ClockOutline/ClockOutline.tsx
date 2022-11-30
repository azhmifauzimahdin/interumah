import React from "react"
import "./ClockOutline.css"

interface ClockOutlineProps {
    className?: string
}
const ClockOutline: React.FC<ClockOutlineProps> = props => {
    const { className } = props
    return (
        <svg className={`clockOutline ${className}`} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.74242 11.5828C9.74883 11.5828 12.186 9.24744 12.186 6.36661C12.186 3.48577 9.74883 1.15039 6.74242 1.15039C3.73601 1.15039 1.29883 3.48577 1.29883 6.36661C1.29883 9.24744 3.73601 11.5828 6.74242 11.5828Z" stroke="#797979" strokeWidth="1.04324" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.74219 3.2373V6.36703L8.91962 8.45352" stroke="#797979" strokeWidth="1.04324" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default ClockOutline