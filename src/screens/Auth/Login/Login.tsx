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
    const [errorMessageEmail, setErrorMessageEmail] = useState<string>('')
    const [errorMessagePassword, setErrorMessagePassword] = useState<string>('')
    const [sending, setSending] = useState<boolean>(false)
    const changeStatus = changePassword === true ? false : true

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        setSending(true)
        setErrorMessageEmail('')
        setErrorMessagePassword('')
        try {
            e.preventDefault()

            const formData = new FormData(e.target as HTMLFormElement)
            const inputObject = Object.fromEntries(formData)

            const resp = await authService.login(inputObject as any as LoginRequest)
            localStorage.setItem('@token', resp.data.data.accessToken)

            navigate('/dashboard')
            setSending(false)
        } catch (error: any) {
            setSending(false)
            if (error.response.data.message === "BAD_REQUEST") {
                setErrorMessageEmail(error.response.data.errors.email)
                setErrorMessagePassword(error.response.data.errors.password)
            } else {
                if (error.response.data.message === "User tidak ditemukan") {
                    setErrorMessageEmail(error.response.data.message)
                    console.log('masuk')
                } else {
                    console.log('keluar')
                    setErrorMessagePassword(error.response.data.message)
                }
            }
            console.log('error', error)
            console.log('message', error.response.data.message)
        }
    }

    const classname = errorMessageEmail || errorMessagePassword ? "form-control input-invalid" : "form-control"

    return (
        <div className="container">
            <h2>Selamat Datang di Interior <span className="rumah">Rumah</span></h2>
            <form onSubmit={login}>
                <div className="form-group">
                    <input type="email" name="email" className={classname} placeholder="Masukan Email Anda" disabled={sending} />
                    {errorMessageEmail ? (
                        <div className="error-message">
                            <Info color="error" fontSize="small" /><span className="textErrorMessage">{errorMessageEmail}</span>
                        </div>
                    ) : null}
                </div>
                <div className="input-group">
                    <input type={changePassword ? "password" : "text"} name="password" className={classname} placeholder="Masukan Password Anda" disabled={sending} />
                    <div className="input-group-prepend">
                        <span className="input-group-text" onClick={() => {
                            setChangePassword(changeStatus);
                        }}>
                            {changeStatus ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" color="disabled" />}
                        </span>
                    </div>
                    {errorMessagePassword ? (
                        <div className="error-message">
                            <Info color="error" fontSize="small" /><span className="textErrorMessage">{errorMessagePassword}</span>
                        </div>
                    ) : null}
                </div>
                <div className="form-change-password">
                    <a href="/change_password" className="changePassword">Lupa Password?</a>
                </div>
                <div className="form-group">
                    <Button type="primary" disabled={sending}>Masuk</Button>
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