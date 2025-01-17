import React from "react"
import "./CloudUpload.css"

interface CloudUploadProps {
    className?: string
}
const CloudUpload: React.FC<CloudUploadProps> = props => {
    const { className } = props
    return (
        <svg className={`cloudUpload ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 31.5">
            <path id="Icon_awesome-cloud-upload-alt" data-name="Icon awesome-cloud-upload-alt" d="M37.8,15.933A6.758,6.758,0,0,0,31.5,6.75a6.716,6.716,0,0,0-3.748,1.139,11.251,11.251,0,0,0-21,5.611c0,.19.007.38.014.57a10.128,10.128,0,0,0,3.361,19.68H36a9,9,0,0,0,1.8-17.817ZM27.661,20.25h-4.6v7.875a1.128,1.128,0,0,1-1.125,1.125H18.563a1.128,1.128,0,0,1-1.125-1.125V20.25h-4.6a1.123,1.123,0,0,1-.795-1.92l7.411-7.411a1.129,1.129,0,0,1,1.589,0l7.411,7.411a1.124,1.124,0,0,1-.795,1.92Z" transform="translate(0 -2.25)" />
        </svg>
    )
}

export default CloudUpload