import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { userService } from "../../services"
import { User } from "../../types/User"

const Dashboard: React.FC = () => {
    const navigate = useNavigate()
    const [profile, setProfile] = useState<User>()

    const logout = () => {
        localStorage.removeItem('@token')
        navigate('/auth/login')
    }

    const getProfile = async () => {
        try {
            const resp = await userService.getLoginUser()

            setProfile(resp.data)
            console.log('profile', profile)
        } catch (error: any) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        getProfile()
    })

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard