import React from "react"
import "./Search.css"

interface SearchProps {
    size?: 'sm' | 'md'
}
const Search: React.FC<SearchProps> = props => {
    const size = props.size || 'md'
    return (
        <svg className={`iconSearch iconSearch-size-${size}`} viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8877 13.0142H12.1289L11.8599 12.7131C12.8013 11.4421 13.368 9.79202 13.368 7.997C13.368 3.99443 10.5728 0.75 7.12443 0.75C3.67606 0.75 0.880859 3.99443 0.880859 7.997C0.880859 11.9996 3.67606 15.244 7.12443 15.244C8.67091 15.244 10.0925 14.5862 11.1875 13.4936L11.4469 13.8057V14.6865L16.2496 20.25L17.6809 18.5888L12.8877 13.0142ZM7.12443 13.0142C4.73266 13.0142 2.80196 10.7732 2.80196 7.997C2.80196 5.22084 4.73266 2.97985 7.12443 2.97985C9.51619 2.97985 11.4469 5.22084 11.4469 7.997C11.4469 10.7732 9.51619 13.0142 7.12443 13.0142Z" fill="#B7B7B7" />
        </svg>

    )
}

export default Search