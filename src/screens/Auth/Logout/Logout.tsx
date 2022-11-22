import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { authService } from "../../../services"

const Logout: React.FC = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        authService.logout()
            .then(resp => {
                localStorage.removeItem('token')
                localStorage.removeItem('refreshToken')
                navigate('/login')
            })
            .catch(error => {
                console.log('error', error)
            })
        navigate('/login')
    }, [navigate, token])

    return <></>
}

export default Logout