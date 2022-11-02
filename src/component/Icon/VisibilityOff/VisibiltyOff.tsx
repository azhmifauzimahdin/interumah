import React from "react"
import "./VisibilityOff.css"

export interface VisibiltyOffProps {
    color?: 'primary' | 'secondary'
}

const VisibilityOff: React.FC<VisibiltyOffProps> = props => {
    const color = props.color || 'primary'

    return (
        <svg className={`visibilityOff visibilityOff-${color}`} xmlns="http://www.w3.org/2000/svg" width="32.985" height="28.5" viewBox="0 0 32.985 28.5">
            <path id="Icon_material-visibility-off" data-name="Icon material-visibility-off" d="M18,10.5A7.5,7.5,0,0,1,25.5,18a7.28,7.28,0,0,1-.54,2.745l4.38,4.38A17.726,17.726,0,0,0,34.485,18a17.74,17.74,0,0,0-16.5-11.25,17.468,17.468,0,0,0-5.97,1.05l3.24,3.24A7.28,7.28,0,0,1,18,10.5ZM3,6.405l3.42,3.42.69.69A17.706,17.706,0,0,0,1.5,18a17.732,17.732,0,0,0,23.07,9.99l.63.63,4.4,4.38L31.5,31.095,4.905,4.5ZM11.3,14.7l2.325,2.325A4.232,4.232,0,0,0,13.5,18,4.494,4.494,0,0,0,18,22.5a4.232,4.232,0,0,0,.975-.12L21.3,24.7A7.451,7.451,0,0,1,11.3,14.7Zm6.465-1.17,4.725,4.725.03-.24a4.494,4.494,0,0,0-4.5-4.5l-.255.015Z" transform="translate(-1.5 -4.5)" />
        </svg>
    )
}

export default VisibilityOff