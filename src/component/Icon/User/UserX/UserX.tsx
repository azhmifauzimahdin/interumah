import React from "react"
import "./UserX.css"

interface UserXProps {
    className?: string
}
const UserX: React.FC<UserXProps> = props => {
    const { className } = props

    return (
        <svg className={`userX ${className}`} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.23402 15.0002C5.70389 15.0002 3.62588 15.0002 1 15.0002C1.62162 12.5828 3.69225 11.2924 7.21191 11.129M8.0001 8.77789C5.85229 8.77789 4.11116 7.03675 4.11116 4.88894C4.11116 2.74114 5.85229 1 8.0001 1C10.1479 1 11.889 2.74114 11.889 4.88894C11.889 7.03675 10.1479 8.77789 8.0001 8.77789Z" strokeWidth="1.55558" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.9983 11.1113L11.1094 15.0003M14.9983 15.0003L11.1094 11.1113" strokeWidth="1.55558" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default UserX