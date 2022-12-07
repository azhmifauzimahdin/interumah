import React from "react"
import "./Star.css"

interface StartProps {
    size?: 'md' | 'lg'
    color?: 'yellow' | 'white'
    className?: string
}
const Star: React.FC<StartProps> = props => {
    const { className } = props
    const size = props.size || 'md'
    const color = props.color || 'yellow'
    return (
        <svg className={`star star-size-${size} star-color-${color} ${className}`} viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12.0553L14.562 15L13.086 9.45L18 5.71579L11.529 5.23421L9 0L6.471 5.23421L0 5.71579L4.914 9.45L3.438 15L9 12.0553Z" />
        </svg>

    )
}

export default Star