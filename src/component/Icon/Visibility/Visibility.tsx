import React from "react"
import "./Visibility.css"

export interface VisibiltyProps {
    color?: 'primary'
}

const Visibility: React.FC<VisibiltyProps> = props => {
    const color = props.color || 'primary'

    return (
        <svg className={`visibility visibility-${color}`} xmlns="http://www.w3.org/2000/svg" width="33" height="22.5" viewBox="0 0 33 22.5">
            <path id="Icon_material-visibility" data-name="Icon material-visibility" d="M18,6.75A17.74,17.74,0,0,0,1.5,18a17.725,17.725,0,0,0,33,0A17.74,17.74,0,0,0,18,6.75ZM18,25.5A7.5,7.5,0,1,1,25.5,18,7.5,7.5,0,0,1,18,25.5Zm0-12A4.5,4.5,0,1,0,22.5,18,4.494,4.494,0,0,0,18,13.5Z" transform="translate(-1.5 -6.75)" />
        </svg>
    )
}

export default Visibility