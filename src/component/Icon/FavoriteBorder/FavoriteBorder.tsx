import React, { useState } from "react"
import "./FavoriteBorder.css"

export interface FavoriteBorderProps {
    color?: 'primary'
    size?: 'md'
}
const FavoriteBorder: React.FC<FavoriteBorderProps> = props => {
    const color = props.color || 'primary'
    const size = props.size || 'md'
    const [y, seyt] = useState(false)
    const coba = () => {
        seyt(true)
    }

    return (
        <svg onClick={coba} className={y ? `favoriteBorder favoriteBorder-color-${color} favoriteBorder-size-${size} favoriteBorder-active-${color}` : `favoriteBorder favoriteBorder-color-${color} favoriteBorder-size-${size}`} viewBox="0 0 27 25" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7269 22.8357L11.7262 22.8351C8.28712 19.6447 5.47255 17.033 3.51172 14.5805C1.55695 12.1355 0.5 9.90756 0.5 7.49319C0.5 3.56234 3.50955 0.5 7.32439 0.5C9.48586 0.5 11.5715 1.53188 12.9328 3.16729L13.3171 3.62896L13.7014 3.16729C15.0626 1.53188 17.1483 0.5 19.3098 0.5C23.1246 0.5 26.1341 3.56234 26.1341 7.49319C26.1341 9.90757 25.0772 12.1355 23.1223 14.5823C21.1664 17.0304 18.3612 19.6383 14.9342 22.8244L14.9087 22.8481L14.9076 22.8491L13.3184 24.3179L11.7269 22.8357Z" />
        </svg>
    )
}

export default FavoriteBorder