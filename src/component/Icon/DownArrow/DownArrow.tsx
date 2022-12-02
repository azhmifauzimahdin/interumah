import React from "react"
import "./DownArrow.css"

interface DownArrowProps {
    className?: string
    size?: 'sm' | 'md'
    color?: 'gray' | 'black'
}
const DownArrow: React.FC<DownArrowProps> = props => {
    const { className } = props
    const size = props.size || 'md'
    const color = props.color || 'gray'
    return (
        <svg className={`downArrow downArrow-color-${color} downArrow-size-${size} ${className}`} viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.0464 5.08419C32.1324 3.97346 32.1324 2.19871 31.0464 1.08798C29.9261 -0.0578629 28.0828 -0.0588677 26.9613 1.08575L18.5563 9.66361C17.153 11.0958 14.847 11.0958 13.4437 9.66362L5.03871 1.08575C3.91716 -0.0588659 2.07387 -0.0578628 0.953564 1.08798C-0.132408 2.19871 -0.132408 3.97346 0.953568 5.08419L13.4409 17.8563C14.8448 19.2922 17.1552 19.2922 18.5591 17.8563L31.0464 5.08419Z" />
        </svg>
    )
}

export default DownArrow