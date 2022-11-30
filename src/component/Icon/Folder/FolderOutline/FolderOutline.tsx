import React from "react"
import "./FolderOutline.css"

const FolderOutline: React.FC = () => {
    return (
        <svg className="folderOutline" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.11111 30H30C31.7183 30 33.1111 28.6072 33.1111 26.8889V9.77778C33.1111 8.05956 31.7183 6.66667 30 6.66667H16L13.3507 2.69269C13.0622 2.25993 12.5765 2 12.0564 2H5.11111C3.39289 2 2 3.39289 2 5.11111V26.8889C2 28.6072 3.39289 30 5.11111 30Z" stroke="white" stroke-width="3.11111" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default FolderOutline