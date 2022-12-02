import React from "react"
import "./HomeCityOutline.css"

interface HomeCityOutlineProps {
    className?: string
}
const HomeCityOutline: React.FC<HomeCityOutlineProps> = props => {
    const { className } = props
    return (
        <svg className={`homeCityOutline ${className}`} viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6667 0V3.76667L20 5.98333V3.33333H36.6667V28.3333H28.3333V31.6667H40V0H16.6667ZM12.5 5L0 13.3333V31.6667H25V13.3333L12.5 5ZM23.3333 6.66667V8.21667L26.0167 10H26.6667V6.66667H23.3333ZM30 6.66667V10H33.3333V6.66667H30ZM12.5 9.16667L21.6667 15V28.3333H16.6667V18.3333H8.33333V28.3333H3.33333V15L12.5 9.16667ZM30 13.3333V16.6667H33.3333V13.3333H30ZM30 20V23.3333H33.3333V20H30Z" fill="white" />
        </svg>
    )
}

export default HomeCityOutline