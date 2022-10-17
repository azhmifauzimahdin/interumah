import React from "react"
import { useNavigate } from "react-router-dom"

const Dashboard: React.FC = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('@token')
        navigate('/auth/login')
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard