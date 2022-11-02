import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { authService, userService } from "../../services"
import { Profile, Users } from "../../types/User"

const Dashboard: React.FC = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState<Users[]>()
    const [user, setUser] = useState<Profile>()
    const token = localStorage.getItem("token")

    const getUsers = async () => {
        try {
            const resp = await userService.getUsers()
            setUsers(resp.data.users)
            console.log('respuser', resp);
            // console.log('users', users);
        } catch (error) {
            console.log('error', error)
        }
    }

    const getProfile = async () => {
        try {
            const resp = await userService.getProfile(1)
            setUser(resp.data.data)
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
        getUsers()
        getProfile()
    }, [navigate, token])

    const logout = async () => {

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        try {
            const resp = await authService.logout()
            console.log("resp", resp)
            localStorage.removeItem('@token')
            navigate('/login')
        } catch (error) {
            console.log("error", error);
        }
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