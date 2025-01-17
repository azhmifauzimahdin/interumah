import React from "react"
import "./Setting.css"

interface SettingProps {
    className?: string
}
const Setting: React.FC<SettingProps> = props => {
    const { className } = props
    return (
        <svg className={`setting ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.25 29.25">
            <path id="Icon_ionic-md-settings" data-name="Icon ionic-md-settings" d="M29.107,19.462A9.146,9.146,0,0,0,29.182,18c0-.512-.075-.95-.075-1.462l3.141-2.413a.672.672,0,0,0,.15-.95L29.406,8.128a.728.728,0,0,0-.9-.293L24.768,9.3a10.886,10.886,0,0,0-2.542-1.463L21.7,3.96a.8.8,0,0,0-.748-.585H14.971a.8.8,0,0,0-.748.585l-.6,3.875A12.665,12.665,0,0,0,11.081,9.3L7.342,7.835a.7.7,0,0,0-.9.293L3.452,13.174a.883.883,0,0,0,.15.95l3.216,2.413c0,.512-.075.95-.075,1.462s.075.95.075,1.462L3.677,21.875a.672.672,0,0,0-.15.95l2.992,5.046a.728.728,0,0,0,.9.293l3.74-1.463A10.884,10.884,0,0,0,13.7,28.165l.6,3.875a.725.725,0,0,0,.748.585h5.983a.8.8,0,0,0,.748-.585l.6-3.875A12.658,12.658,0,0,0,24.918,26.7l3.74,1.463a.7.7,0,0,0,.9-.293l2.992-5.046a.882.882,0,0,0-.15-.95ZM17.963,23.119A5.12,5.12,0,1,1,23.2,18,5.146,5.146,0,0,1,17.963,23.119Z" transform="translate(-3.375 -3.375)" />
        </svg>
    )
}

export default Setting