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

    const navigate = useNavigate()

    const register = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const formData = new FormData(e.target as HTMLFormElement)
            const inputObject = Object.fromEntries(formData)

            await authService.register(inputObject as any as RegisterRequest)
            navigate('/auth/login')
        } catch (error: any) {
            setErrorMessagePassword(error.response.data.errors.password)
            setErrorMessageEmail(error.response.data.errors.email)
        }
    }

    const disableButton = !checkTerms ? true : false

    return (
        <div className="container">
            <h2>Formulir Registrasi</h2>
            <form onSubmit={register}>
                <div className="form-group">
                    <input type="hidden" name="name" value="-" />
                    <input type="hidden" name="age" value="0" />
                    <input type="hidden" name="phone" value="0xxxxxxxxxx" />
                    <input type="hidden" name="address" value="-" />
                    <input type="hidden" name="job" value="-" />
                    <input type="hidden" name="role" value="user" />
                    <input type="email" name="email" className="form-control" placeholder="Masukan Email Anda" />
                    {errorMessageEmail ? (
                        <div className="error-message">
                            <Info color="error" fontSize="small" /><span className="textErrorMessage">{errorMessageEmail}</span>
                        </div>
                    ) : null}
                </div>
                <div className="input-group">
                    <input type={changePassword1 ? "password" : "text"} name="password" className="form-control" placeholder="Masukan Password Anda" />
                    <div className="input-group-prepend">
                        <span className="input-group-text" onClick={() => {
                            setChangePassword1(changeStatus1);
                        }}>
                            {changeStatus1 ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" color="disabled" />}
                        </span>
                    </div>
                </div>
                <div className="input-group">
                    <input type={changePassword2 ? "password" : "text"} name="confirmPasword" className="form-control" placeholder="Konfirmasi Ulang Password" />
                    <div className="input-group-prepend">
                        <span className="input-group-text" onClick={() => {
                            setChangePassword2(changeStatus2);
                        }}>
                            {changeStatus2 ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" color="disabled" />}
                        </span>
                    </div>
                    {errorMessagePassword ? (
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
                    <Button type="primary" cek={disableButton}>Daftar</Button>
                </div>
            </form>
        </div>
    )
}

export default Register