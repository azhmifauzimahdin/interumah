import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoadingScreen } from "../../../component"
import { authService } from "../../../services"

const Logout: React.FC = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)
    const token = localStorage.getItem("token")
    const refreshToken = localStorage.getItem("refreshToken")

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        setLoading(true)
        authService.logout(refreshToken as any)
            .then(response => {
                console.log(response.data)
                localStorage.removeItem('token')
                localStorage.removeItem('refreshToken')
                setLoading(false)
                navigate('/login')
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            })
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        navigate('/login')
    }, [navigate, refreshToken, token])

    return (
        <>
            {loading && <LoadingScreen />}
        </>)
}

export default Logout