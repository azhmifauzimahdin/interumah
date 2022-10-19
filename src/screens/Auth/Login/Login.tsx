import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Google } from "../../../assets"
import { Button } from "../../../component"
import { authService } from "../../../services"
import { LoginRequest } from "../../../types/Login"
import '../Auth.css'
import { Info, Visibility, VisibilityOff } from "@material-ui/icons"

const Login: React.FC = () => {
    const navigate = useNavigate()
    const [changePassword, setChangePassword] = useState(true)
    const changeStatus = changePassword === true ? false : true
    const [errorMessage, setErrorMessage] = useState<string>('')

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()

            const formData = new FormData(e.target as HTMLFormElement)
            const inputObject = Object.fromEntries(formData)
            console.log('inputObject', inputObject)

            const resp = await authService.login(inputObject as any as LoginRequest)
            localStorage.setItem('@token', resp.data.data.accessToken)

            navigate('/user/dashboard')
        } catch (error: any) {
            if (error.response.data.code === 400 && error.response.data.message === "BAD_REQUEST") {
                setErrorMessage(error.response.data.errors.email)
                console.log('Masuk if')
            } else {
                setErrorMessage(error.response.data.message)
                console.log('Masuk else')
            }
        }
    }
    return (
        <div className="container">
            <h2>Selamat Datang di Interior <span className="rumah">Rumah</span></h2>
            <form onSubmit={login}>
                <div className="form-group">
                    <input type="email" name="email" className="form-control" placeholder="Masukan Email Anda" required />
                </div>
                <div className="input-group">
                    <input type={changePassword ? "password" : "text"} name="password" className="form-control" placeholder="Masukan Password Anda" required />
                    <div className="input-group-prepend">
                        <span className="input-group-text" onClick={() => {
                            setChangePassword(changeStatus);
                        }}>
                            {changeStatus ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" color="disabled" />}
                        </span>
                    </div>
                    {errorMessage ? (
                        <div className="error-message">
                            <Info color="error" fontSize="small" /><span className="textErrorMessage">{errorMessage}</span>
                        </div>
                    ) : null}
                </div>
                <div className="form-change-password">
                    <a href="/change_password" className="changePassword">Lupa Password?</a>
                </div>
                <div className="form-group">
                    <Button type="primary">Masuk</Button>
                </div>
            </form>
            <div className="or">
                <span>------------- OR ------------</span>
            </div>
            <Button type="secondary"><img src={Google} alt="Logo Google" className="img-google" /> Masuk Menggunakan Google</Button>
        </div >
    )
}

export default Login