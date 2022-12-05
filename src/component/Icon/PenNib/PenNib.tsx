import React from "react"
import "./PenNib.css"

interface PenNibProps {
    className?: string
}
const PenNib: React.FC<PenNibProps> = props => {
    const { className } = props
    return (
        <svg className={`penNib ${className}`} viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.073 13.2828C12.1118 13.5545 11.2316 14.0571 10.5092 14.7468C9.78677 15.4366 9.24397 16.2925 8.9281 17.2401L0 44.0235L1.40587 45.4293L15.7718 31.0634C15.4856 30.4643 15.3124 29.802 15.3124 29.0938C15.3124 26.5568 17.3691 24.5001 19.9062 24.5001C22.4432 24.5001 24.4999 26.5568 24.4999 29.0938C24.4999 31.6309 22.4432 33.6876 19.9062 33.6876C19.198 33.6876 18.5357 33.5144 17.9366 33.2282L3.57067 47.5941L4.97654 49L31.7599 40.0719C32.7075 39.756 33.5634 39.2132 34.2532 38.4908C34.9429 37.7683 35.4455 36.8882 35.7172 35.927L39.8123 21.4376L27.5624 9.18769L13.073 13.2828ZM47.6542 7.09851L41.9015 1.34582C40.1071 -0.448606 37.1968 -0.448606 35.4023 1.34582L29.9903 6.7578L42.2422 19.0097L47.6542 13.5977C49.4486 11.8032 49.4486 8.89389 47.6542 7.09851Z" fill="black" />
        </svg>

    )
}

export default PenNib