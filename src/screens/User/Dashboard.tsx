import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { userService } from "../../services"
import { Profile } from "../../types/User"

const Dashboard: React.FC = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState<Profile>()

    const getUsers = async () => {
        try {
            const resp = await userService.getProfile()
            setUser(resp.data.data)
            console.log('resp', resp)
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    const logout = () => {
        localStorage.removeItem('@token')
        navigate('/login')
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{user?.email}</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard