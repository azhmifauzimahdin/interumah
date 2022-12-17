import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Google } from "../../../assets"
import { Button, ErrorMessage, Input, LoadingScreen } from "../../../component"
import { IconVisibility, IconVisibilityOff } from "../../../component/Icon"
import { authService } from "../../../services"
import { LoginRequest } from "../../../types/Login"
import './Login.css'

const Login: React.FC = () => {
    window.scrollTo(0, 0)
    const navigate = useNavigate()
    const [changePassword, setChangePassword] = useState(true)
    const [errorMessageEmail, setErrorMessageEmail] = useState<string>('')
    const [errorMessagePassword, setErrorMessagePassword] = useState<string>('')
    const [sending, setSending] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const changeStatus = changePassword === true ? false : true

    //------ Login ------
    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        setSending(true)
        setLoading(true)
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
            setLoading(false)
        } catch (error: any) {
            setSending(false)
            setLoading(false)
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

    //------- Login With Google -------
    const loginWithGoogle = () => {
        window.location.assign('http://103.250.10.102/oauth2/redirect/google');
    }

    //------ Input Invalid --------
    const classNameEmail = errorMessageEmail ? "input-invalid" : ""
    const classNamePassword = errorMessagePassword ? "input-invalid" : ""

    return (
        <article className="container">
            <header className="titleLogin">Selamat Datang di <span className="titleBlue">Interumah</span></header>
            <form onSubmit={login}>
                <section className="form-group">
                    <Input type="email" name="email" inputValid={classNameEmail} placeholder="Masukan Email Anda" disabled={sending} />
                    {errorMessageEmail ? (
                        <ErrorMessage>{errorMessageEmail}</ErrorMessage>
                    ) : null}
                </section>
                <section className="input-group-login">
                    <Input type={changePassword ? "password" : "text"} name="password" inputValid={classNamePassword} placeholder="Masukan Password Anda" disabled={sending} />
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
                </section>
                <section className="form-change-password">
                    <a href="/forget_password" className="changePassword">Lupa Password?</a>
                </section>
                <section className="form-group">
                    <Button type="primary" disabled={sending}>Masuk</Button>
                </section>
            </form>
            <section className="or">
                <span>------------- OR ------------</span>
            </section>
            <section className="buttonLoginWithGoogle">
                <Button type="secondary" onClick={loginWithGoogle} ><img src={Google} alt="Logo Google" className="img-google" /> Masuk Menggunakan Google</Button>
            </section>
            <section className="linktoRegister">
                <span>Belum punya akun? <a href="/register">Daftar</a></span>
            </section>
            {loading && <LoadingScreen />}
        </article>
    )
}

export default Login