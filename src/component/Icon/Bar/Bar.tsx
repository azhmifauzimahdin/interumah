import React from "react"
import "./Bar.css"

export interface BarProps {
    color?: 'primary'
}

const Bar: React.FC<BarProps> = props => {
    const color = props.color || 'primary'

    return (
        <svg className={`bar bar-${color}`} xmlns="http://www.w3.org/2000/svg" width="31.5" height="27.563" viewBox="0 0 31.5 27.563">
            <path id="Icon_awesome-bars" data-name="Icon awesome-bars" d="M1.125,9.281h29.25A1.125,1.125,0,0,0,31.5,8.156V5.344a1.125,1.125,0,0,0-1.125-1.125H1.125A1.125,1.125,0,0,0,0,5.344V8.156A1.125,1.125,0,0,0,1.125,9.281Zm0,11.25h29.25A1.125,1.125,0,0,0,31.5,19.406V16.594a1.125,1.125,0,0,0-1.125-1.125H1.125A1.125,1.125,0,0,0,0,16.594v2.813A1.125,1.125,0,0,0,1.125,20.531Zm0,11.25h29.25A1.125,1.125,0,0,0,31.5,30.656V27.844a1.125,1.125,0,0,0-1.125-1.125H1.125A1.125,1.125,0,0,0,0,27.844v2.813A1.125,1.125,0,0,0,1.125,31.781Z" transform="translate(0 -4.219)" />
        </svg>
    )
}

export default Bar