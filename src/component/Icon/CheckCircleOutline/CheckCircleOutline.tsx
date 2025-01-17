import React from "react"
import "./CheckCircleOutline.css"

export interface CheckCircleOutlineProps {
    color?: 'primary' | 'success'
}

const CheckCircleOutline: React.FC<CheckCircleOutlineProps> = props => {
    const color = props.color || 'primary'

    return (
        <svg className={`checkCircleOutline checkCircleOutline-${color}`} xmlns="http://www.w3.org/2000/svg" width="29.25" height="29.25" viewBox="0 0 29.25 29.25">
            <g id="Icon_ionic-ios-checkmark-circle-outline" data-name="Icon ionic-ios-checkmark-circle-outline" transform="translate(-3.375 -3.375)">
                <path id="Path_1" data-name="Path 1" d="M25.5,13.563l-1.237-1.273a.266.266,0,0,0-.2-.084h0a.255.255,0,0,0-.2.084l-8.578,8.641L12.164,17.81a.272.272,0,0,0-.394,0l-1.252,1.252a.28.28,0,0,0,0,.4L14.456,23.4a1.245,1.245,0,0,0,.823.4,1.3,1.3,0,0,0,.816-.387H16.1l9.4-9.45A.3.3,0,0,0,25.5,13.563Z" />
                <path id="Path_2" data-name="Path 2" d="M18,5.344A12.651,12.651,0,1,1,9.049,9.049,12.573,12.573,0,0,1,18,5.344m0-1.969A14.625,14.625,0,1,0,32.625,18,14.623,14.623,0,0,0,18,3.375Z" />
            </g>
        </svg>
    )
}

export default CheckCircleOutline