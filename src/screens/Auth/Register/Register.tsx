import React, { useState } from "react"
import { Button } from "../../../component"
import '../Auth.css'
import { Info, Visibility, VisibilityOff } from "@material-ui/icons"
import { useNavigate } from "react-router-dom"
import { authService } from "../../../services"
import { RegisterRequest } from "../../../types/Register"

const Register: React.FC = () => {
    const [changePassword1, setChangePassword1] = useState(true)
    const [changePassword2, setChangePassword2] = useState(true)
    const changeStatus1 = changePassword1 === true ? false : true
    const changeStatus2 = changePassword2 === true ? false : true

    const [checkTerms, setCheckTerms] = useState<boolean>(false)
    const [errorMessageEmail, setErrorMessageEmail] = useState<string>('')
    const [errorMessagePassword, setErrorMessagePassword] = useState<string>('')
    const [sending, setSending] = useState<boolean>(false)


    const navigate = useNavigate()

    const register = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSending(true)
        setErrorMessageEmail('')
        setErrorMessagePassword('')
        try {
            const formData = new FormData(e.target as HTMLFormElement)
            const inputObject = Object.fromEntries(formData)
            var nameMatch = inputObject.email.toString().match(/^([^@]*)@/)
            var username = nameMatch ? nameMatch[1] : null
            const objectRegister = {
                ...inputObject,
                name: username,
                age: "0",
                phone: "xxxxxxxxxxx",
                address: "-",
                job: "-",
                role: "user"
            }

            await authService.register(objectRegister as any as RegisterRequest)
            navigate('/auth/login')
            setSending(false)
        } catch (error: any) {
            setSending(false)
            setErrorMessagePassword(error.response.data.errors.password.toString())
            setErrorMessageEmail(error.response.data.errors.email.toString())
        }
    }

    const disableButton = !checkTerms ? true : false
    const classname = errorMessageEmail || errorMessagePassword ? "form-control input-invalid" : "form-control"


    return (
        <div className="container">
            <h2>Formulir Registrasi</h2>
            <form onSubmit={register}>
                <div className="form-group">
                    <input type="email" name="email" className={classname} placeholder="Masukan Email Anda" disabled={sending} />
                    {errorMessageEmail ? (
                        <div className="error-message">
                            <Info color="error" fontSize="small" /><span className="textErrorMessage">{errorMessageEmail}</span>
                        </div>
                    ) : null}
                </div>
                <div className="input-group">
                    <input type={changePassword1 ? "password" : "text"} name="password" className={classname} placeholder="Masukan Password Anda" disabled={sending} />
                    <div className="input-group-prepend">
                        <span className="input-group-text" onClick={() => {
                            setChangePassword1(changeStatus1);
                        }}>
                            {changeStatus1 ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" color="disabled" />}
                        </span>
                    </div>
                    {errorMessagePassword === "Password tidak boleh kosong." ? (
                        <div className="error-message">
                            <Info color="error" fontSize="small" /><span className="textErrorMessage">{errorMessagePassword}</span>
                        </div>
                    ) : null}
                </div>
                <div className="input-group">
                    <input type={changePassword2 ? "password" : "text"} name="confirmPasword" className={classname} placeholder="Konfirmasi Ulang Password" disabled={sending} />
                    <div className="input-group-prepend">
                        <span className="input-group-text" onClick={() => {
                            setChangePassword2(changeStatus2);
                        }}>
                            {changeStatus2 ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" color="disabled" />}
                        </span>
                    </div>
                    {errorMessagePassword !== "Password tidak boleh kosong." && errorMessagePassword ? (
                        <div className="error-message">
                            <Info color="error" fontSize="small" /><span className="textErrorMessage">{errorMessagePassword}</span>
                        </div>
                    ) : null}
                </div>
                <div className="form-group">
                    <div className="checkboxRegister">
                        <input type="checkbox" onChange={(e) => setCheckTerms(e.target.checked)} />Saya setuju dengan <span> Syarat dan Ketentuan</span> yang berlaku
                    </div>
                </div>
                <div className="form-group">
                    <Button type="primary" disabled={disableButton || sending}>Daftar</Button>
                </div>
            </form>
        </div>
    )
}

export default Register