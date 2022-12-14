import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, ErrorMessage, Input, LoadingScreen } from "../../../component"
import { IconVisibility, IconVisibilityOff } from "../../../component/Icon"
import { AdminService } from "../../../services"
import { RequestLoginAdmin } from "../../../types/Admin"
import './Login.css'

const Login: React.FC = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)
    const [changePassword, setChangePassword] = useState(true)
    const [errorMessagePassword, setErrorMessagePassword] = useState<string>('')
    const [sending, setSending] = useState<boolean>(false)
    const changeStatus = changePassword === true ? false : true

    useEffect(() => {
        AdminService.generateAdminCredential()
            .then(response => sessionStorage.setItem('authToken', response.data.authToken))
            .catch(error => console.log('error', error))
    }, [])

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        setSending(true)
        setLoading(true)
        setErrorMessagePassword('')
        try {
            e.preventDefault()

            const formData = new FormData(e.target as HTMLFormElement)
            const inputObject = Object.fromEntries(formData)

            const response = await AdminService.loginAdmin(inputObject as any as RequestLoginAdmin)
            localStorage.setItem('authToken', response.data.data.accessToken)

            navigate('/admin/dashboard')
            setSending(false)
            setLoading(false)
        } catch (error: any) {
            setSending(false)
            setLoading(false)
            setErrorMessagePassword(error.response.data.errors.password)
        }
    }

    const classNamePassword = errorMessagePassword ? "input-invalid" : ""

    return (
        <article className="container">
            <header className="titleLogin">Selamat Datang di <span className="titleBlue">LOGIN ADMIN</span></header>
            <section className="descriptionLogin">
                <section className="descriptionLogin-directory">
                    /var/lib/interumah/secrets/adminPassword
                </section>
                Harap salin kata sandi dari salah satu lokasi dan tempel di bawah.
            </section>
            <form onSubmit={login}>
                <section className="input-group-login">
                    <Input type={changePassword ? "password" : "text"} name="token" inputValid={classNamePassword} placeholder="Masukan Token" disabled={sending} />
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
                <section className="form-group">
                    <Button type="primary" disabled={sending}>Masuk</Button>
                </section>
            </form>
            {loading && <LoadingScreen />}
        </article>
    )
}

export default Login