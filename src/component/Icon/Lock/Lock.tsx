import React from "react"
import "./Lock.css"

interface LockProps {
    className?: string
}
const Lock: React.FC<LockProps> = props => {
    const { className } = props
    return (
        <svg className={`lock ${className}`} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.575 4.8C11.0168 4.8 11.375 4.44183 11.375 4C11.375 1.7944 9.41237 0 7 0C4.58763 0 2.625 1.7944 2.625 4V5.525C2.625 6.00825 2.23325 6.4 1.75 6.4C0.784875 6.4 0 7.1176 0 8V14.4C0 15.2824 0.784875 16 1.75 16H12.25C13.2151 16 14 15.2824 14 14.4V8C14 7.1176 13.2151 6.4 12.25 6.4H6.775C5.44952 6.4 4.375 5.32548 4.375 4C4.375 2.6768 5.55275 1.6 7 1.6C8.44725 1.6 9.625 2.6768 9.625 4C9.625 4.44183 9.98317 4.8 10.425 4.8H10.575Z" />
        </svg>
    )
}

export default Lock