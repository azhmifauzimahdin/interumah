import axios from "axios"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Logout.css"

const AdminLogout: React.FC = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("authToken")

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        localStorage.removeItem('authToken')
        navigate('/admin/login')
    }, [navigate, token])

    return <></>
}

export default AdminLogout