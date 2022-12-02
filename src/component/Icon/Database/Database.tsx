import React from "react"
import "./Database.css"

interface DatabaseProps {
    className?: string
}
const Database: React.FC<DatabaseProps> = props => {
    const { className } = props
    return (
        <svg className={`database ${className}`} viewBox="0 0 42 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8.42467C0 3.77004 7.54008 0 16.8493 0C26.1586 0 33.6987 3.77004 33.6987 8.42467C33.6987 13.0793 26.1586 16.8493 16.8493 16.8493C7.54008 16.8493 0 13.0793 0 8.42467ZM17.0178 31.5925H16.8493C7.54008 31.5925 0 27.8225 0 23.1679V29.4864C0 34.141 7.54008 37.911 16.8493 37.911H17.4601C17.081 36.5631 16.8493 35.152 16.8493 33.6987C16.8493 32.9826 16.9125 32.2876 17.0178 31.5925ZM33.6987 19.124C33.6987 19.0608 33.6987 19.0187 33.6987 18.9555V12.637C33.6987 17.2916 26.1586 21.0617 16.8493 21.0617C7.54008 21.0617 0 17.2916 0 12.637V18.9555C0 23.6102 7.54008 27.3802 16.8493 27.3802H18.3026C20.6826 22.3886 25.7374 18.9555 31.5925 18.9555C32.3086 18.9555 33.0037 19.0187 33.6987 19.124ZM41.7021 36.6473C41.9128 36.6473 41.9128 36.858 41.7021 37.0686L39.596 40.6491C39.3854 40.8597 39.1747 40.8597 38.9641 40.8597L36.4367 40.0172C35.8049 40.4384 35.3836 40.6491 34.7518 41.0703L34.3305 43.8083C34.3305 44.0189 34.1199 44.2295 33.9093 44.2295H29.697C29.4864 44.2295 29.2757 44.0189 29.0651 43.8083L28.6439 41.0703C28.012 40.8597 27.3802 40.4384 26.959 40.0172L24.4316 41.0703C24.2209 41.0703 24.0103 41.0703 23.7997 40.8597L21.6935 37.2792C21.4829 37.0686 21.6935 36.858 21.9042 36.6473L24.2209 34.9624V32.8562L21.9042 31.1713C21.6935 30.9607 21.6935 30.7501 21.6935 30.5394L23.7997 26.959C24.0103 26.7483 24.2209 26.7483 24.4316 26.7483L26.959 27.8014C27.5908 27.3802 28.012 27.1696 28.6439 26.7483L29.0651 24.0103C29.0651 23.7997 29.2757 23.5891 29.697 23.5891H33.9093C34.1199 23.5891 34.3305 23.7997 34.3305 24.0103L34.7518 26.7483C35.3836 26.959 36.0155 27.3802 36.6473 27.8014L39.1747 26.7483C39.3854 26.7483 39.8066 26.7483 39.8066 26.959L41.9128 30.5394C42.1234 30.7501 41.9128 30.9607 41.7021 31.1713L39.3854 32.8562V34.9624L41.7021 36.6473ZM34.7518 33.6987C34.7518 32.0138 33.2775 30.5394 31.5925 30.5394C29.9076 30.5394 28.4333 32.0138 28.4333 33.6987C28.4333 35.3836 29.9076 36.858 31.5925 36.858C33.2775 36.858 34.7518 35.3836 34.7518 33.6987Z" />
        </svg>

    )
}

export default Database