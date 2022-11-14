import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Google } from "../../../assets"
import { Button, ErrorMessage, Input } from "../../../component"
import { IconInfo, IconVisibility, IconVisibilityOff } from "../../../component/Icon"
import { authService } from "../../../services"
import { LoginRequest } from "../../../types/Login"
import './Login.css'

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
            localStorage.setItem('token', resp.data.data.accessToken)
            localStorage.setItem('refreshToken', resp.data.data.refreshToken)

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
                } else {
                    setErrorMessagePassword(error.response.data.message)
                }
            }
        }
    }

    const classNameEmail = errorMessageEmail ? "form-control input-invalid" : "form-control"
    const classNamePassword = errorMessagePassword ? "form-control input-invalid" : "form-control"

    return (
        <div className="container">
            <div className="titleLogin">Selamat Datang di <span className="titleBlue">Interumah</span></div>
            <form onSubmit={login}>
                <div className="form-group">
                    <Input type="email" name="email" className={classNameEmail} placeholder="Masukan Email Anda" disabled={sending} />
                    {errorMessageEmail ? (
                        <ErrorMessage>{errorMessageEmail}</ErrorMessage>
                    ) : null}
                </div>
                <div className="input-group">
                    <Input type={changePassword ? "password" : "text"} name="password" className={classNamePassword} placeholder="Masukan Password Anda" disabled={sending} />
                    <div className="input-group-prepend">
                        <span className="input-group-text" onClick={() => {
                            setChangePassword(changeStatus);
                        }}>
                            {changeStatus ? <IconVisibility /> : <IconVisibilityOff color="secondary" />}
                        </span>
                    </div>
                    {errorMessagePassword ? (
                        <ErrorMessage>{errorMessagePassword}</ErrorMessage>
                    ) : null}
                </div>
                <div className="form-change-password">
                    <a href="/forget_password" className="changePassword">Lupa Password?</a>
                </div>
                <div className="form-group">
                    <Button type="primary" disabled={sending}>Masuk</Button>
                </div>
            </form>
            <div className="or">
                <span>------------- OR ------------</span>
            </div>
            <div className="buttonLoginWithGoogle">
                <Button type="secondary" ><img src={Google} alt="Logo Google" className="img-google" /> Masuk Menggunakan Google</Button>
            </div>
            <div className="linktoRegister">
                <span>Belum punya akun? <a href="/register">Daftar</a></span>
            </div>
        </div >
    )
}

export default Login