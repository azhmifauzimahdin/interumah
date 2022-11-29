import React from "react"
import "./Send.css"

interface SendProps {
    className?: string
}
const Send: React.FC<SendProps> = props => {
    const { className } = props
    return (
        <svg className={`send ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.621 33.621">
            <g id="Icon_feather-send" data-name="Icon feather-send" transform="translate(-1.5 -0.879)">
                <path id="Path_1" data-name="Path 1" d="M33,3,16.5,19.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                <path id="Path_2" data-name="Path 2" d="M33,3,22.5,33l-6-13.5L3,13.5Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </g>
        </svg>

    )
}

export default Send