import React from "react"
import "./RoundPlus.css"

const RoundPlus: React.FC = () => {
    return (
        <svg className="roundPlus" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22.3089" cy="21.974" r="20.4615" stroke="#797979" strokeWidth="1.94872" />
            <rect x="20.3555" y="12.2305" width="3.89744" height="19.4872" fill="#797979" />
            <rect x="12.5625" y="23.9229" width="3.89743" height="19.4872" transform="rotate(-90 12.5625 23.9229)" fill="#797979" />
        </svg>
    )
}

export default RoundPlus