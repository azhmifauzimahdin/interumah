import React from "react"
import { useNavigate } from "react-router-dom"
import useProfile from "../../hooks/useProfile"

const Dashboard: React.FC = () => {
    const navigate = useNavigate()
    const { profile } = useProfile()
    const logout = () => {
        localStorage.removeItem('@token')
        navigate('/login')
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{profile.email}</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard