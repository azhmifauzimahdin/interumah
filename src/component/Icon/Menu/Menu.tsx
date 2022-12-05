import React from "react"
import "./Menu.css"

interface MenuProps {
    className?: string
}
const Menu: React.FC<MenuProps> = props => {
    const { className } = props
    return (
        <svg className={`menu ${className}`} viewBox="0 0 35 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.1875 10.9375C1.60734 10.9375 1.05094 11.168 0.640704 11.5782C0.230469 11.9884 0 12.5448 0 13.125C0 13.7052 0.230469 14.2616 0.640704 14.6718C1.05094 15.082 1.60734 15.3125 2.1875 15.3125V10.9375ZM32.8125 15.3125C33.3927 15.3125 33.9491 15.082 34.3593 14.6718C34.7695 14.2616 35 13.7052 35 13.125C35 12.5448 34.7695 11.9884 34.3593 11.5782C33.9491 11.168 33.3927 10.9375 32.8125 10.9375V15.3125ZM2.1875 0C1.60734 0 1.05094 0.230469 0.640704 0.640704C0.230469 1.05094 0 1.60734 0 2.1875C0 2.76766 0.230469 3.32406 0.640704 3.7343C1.05094 4.14453 1.60734 4.375 2.1875 4.375V0ZM32.8125 4.375C33.3927 4.375 33.9491 4.14453 34.3593 3.7343C34.7695 3.32406 35 2.76766 35 2.1875C35 1.60734 34.7695 1.05094 34.3593 0.640704C33.9491 0.230469 33.3927 0 32.8125 0V4.375ZM2.1875 21.875C1.60734 21.875 1.05094 22.1055 0.640704 22.5157C0.230469 22.9259 0 23.4823 0 24.0625C0 24.6427 0.230469 25.1991 0.640704 25.6093C1.05094 26.0195 1.60734 26.25 2.1875 26.25V21.875ZM32.8125 26.25C33.3927 26.25 33.9491 26.0195 34.3593 25.6093C34.7695 25.1991 35 24.6427 35 24.0625C35 23.4823 34.7695 22.9259 34.3593 22.5157C33.9491 22.1055 33.3927 21.875 32.8125 21.875V26.25ZM2.1875 15.3125H32.8125V10.9375H2.1875V15.3125ZM2.1875 4.375H32.8125V0H2.1875V4.375ZM2.1875 26.25H32.8125V21.875H2.1875V26.25Z" fill="#101B94" />
        </svg>
    )
}

export default Menu