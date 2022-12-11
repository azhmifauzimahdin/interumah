import React from "react"
import "./MoneyBag.css"

interface MoneyBagProps {
    className?: string
}
const MoneyBag: React.FC<MoneyBagProps> = props => {
    const { className } = props
    return (
        <svg className={`moneyBag ${className}`} viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M22.5488 0C16.9031 0 11.7583 1.86465 8.71527 3.38887C8.441 3.52621 8.18393 3.66079 7.94498 3.79099C7.47225 4.04865 7.07085 4.28915 6.75 4.50003L10.2124 9.59709L11.8421 10.2459C18.2126 13.4601 26.7554 13.4601 33.1259 10.2459L34.9764 9.2858L38.2502 4.50003C37.7705 4.18019 37.1069 3.79215 36.2905 3.37955C36.2408 3.3544 36.1905 3.32916 36.1396 3.30384C33.1097 1.79622 28.0899 0 22.5488 0ZM14.4959 5.77022C13.2498 5.54033 12.0255 5.22325 10.8698 4.85945C13.7214 3.5932 17.9712 2.25001 22.5488 2.25001C25.7205 2.25001 28.7193 2.89492 31.1998 3.71151C28.293 4.12184 25.191 4.81452 22.2362 5.66935C19.9111 6.34196 17.1933 6.26794 14.4959 5.77022Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M34.446 12.0999L34.1396 12.2544C27.1315 15.7903 17.8365 15.7903 10.8286 12.2544L10.5373 12.1075C0.0102118 23.6591 -11.0336 45.3209 22.5488 44.9964C56.1082 44.672 44.8915 23.2605 34.446 12.0999ZM24.4253 20.2498H20.5749V22.0499C19.3237 22.0469 18.1206 22.4997 17.2202 23.3123C16.3201 24.1247 15.7937 25.233 15.7527 26.4022C15.7116 27.5714 16.1591 28.7096 17.0003 29.5755C17.8416 30.4414 19.0105 30.967 20.2592 31.0409L20.5749 31.0499H24.4253L24.5986 31.0643C24.8206 31.1019 25.0214 31.2111 25.1659 31.373C25.3105 31.5348 25.3898 31.7391 25.3898 31.9499C25.3898 32.1607 25.3105 32.365 25.1659 32.5268C25.0214 32.6887 24.8206 32.7979 24.5986 32.8355L24.4253 32.8499H16.7245V36.4499H20.5749V38.2499H24.4253V36.4499C25.6766 36.4529 26.8797 36 27.78 35.1875C28.6801 34.3751 29.2065 33.2668 29.2476 32.0976C29.2886 30.9284 28.8411 29.7902 27.9999 28.9243C27.1587 28.0584 25.9898 27.5328 24.741 27.4589L24.4253 27.4499H20.5749L20.4017 27.4355C20.1797 27.3979 19.9789 27.2887 19.8343 27.1268C19.6897 26.965 19.6104 26.7607 19.6104 26.5499C19.6104 26.3391 19.6897 26.1348 19.8343 25.973C19.9789 25.8111 20.1797 25.7019 20.4017 25.6643L20.5749 25.6499H28.2758V22.0499H24.4253V20.2498Z" fill="black" />
        </svg>

    )
}

export default MoneyBag