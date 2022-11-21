import React from "react"
import "./Favorite.css"

export interface FavoriteProps {
    color?: 'primary'
    size?: 'md'
}
const Favorite: React.FC<FavoriteProps> = props => {
    const color = props.color || 'primary'
    const size = props.size || 'md'

    return (
        <svg className={`favorite favorite-color-${color} favorite-size-${size}`} viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 44L20.52 40.8349C8.16 29.6371 0 22.2518 0 13.188C0 5.80272 5.808 0 13.2 0C17.376 0 21.384 1.94223 24 5.01144C26.616 1.94223 30.624 0 34.8 0C42.192 0 48 5.80272 48 13.188C48 22.2518 39.84 29.6371 27.48 40.8589L24 44Z" fill="#B7B7B7" />
        </svg>
    )
}

export default Favorite