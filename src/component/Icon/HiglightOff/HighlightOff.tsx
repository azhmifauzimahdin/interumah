import React from "react"
import "./HighlightOff.css"

export interface HighlightOffProps {
    color?: 'primary' | 'danger'
}

const HighlightOff: React.FC<HighlightOffProps> = props => {
    const color = props.color || 'primary'

    return (
        <svg className={`highlightOff highlightOff-${color}`} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <path id="Icon_material-highlight-off" data-name="Icon material-highlight-off" d="M21.885,12,18,15.885,14.115,12,12,14.115,15.885,18,12,21.885,14.115,24,18,20.115,21.885,24,24,21.885,20.115,18,24,14.115ZM18,3A15,15,0,1,0,33,18,14.986,14.986,0,0,0,18,3Zm0,27A12,12,0,1,1,30,18,12.016,12.016,0,0,1,18,30Z" transform="translate(-3 -3)" />
        </svg>
    )
}

export default HighlightOff