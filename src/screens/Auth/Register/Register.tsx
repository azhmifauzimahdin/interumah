import React, { useState } from "react"
import { Button, PWDRequisite } from "../../../component"
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
    const [pwdRequiste, setPWDRequiste] = useState(false)
    const [checks, setChecks] = useState({
        lowercaseCheck: false,
        uppercaseCheck: false,
        numericCheck: false,
        nonAlphanumericCheck: false,
        minCharacterCheck: false
    })

    const navigate = useNavigate()

    const register = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSending(true)
        setErrorMessageEmail('')
        setErrorMessagePassword('')
        try {
            const formData = new FormData(e.target as HTMLFormElement)
            const inputObject = Object.fromEntries(formData)

            await authService.register(inputObject as any as RegisterRequest)
            navigate('/login')
            setSending(false)
        } catch (error: any) {
            setSending(false)
            setErrorMessageEmail(error.response.data.errors.email)
            setErrorMessagePassword(error.response.data.errors.password)
        }
    }

    const disableButton = !checkTerms ? true : false
    const classname = errorMessageEmail || errorMessagePassword ? "form-control input-invalid" : "form-control"

    const handleOnFocusPassword = () => {
        setPWDRequiste(true)
    }
    const handleOnBlurPassword = () => {
        setPWDRequiste(false)
    }
    const handleKeyUpPassword = (e: any) => {
        const { value } = e.target
        const lowercaseCheck = /[a-z]/.test(value)
        const uppercaseCheck = /[A-Z]/.test(value)
        const numericCheck = /[\d]/.test(value)
        const nonAlphanumericCheck = /[\W]/.test(value)
        const minCharacterCheck = /.{8,}/.test(value)
        setChecks({
            lowercaseCheck,
            uppercaseCheck,
            numericCheck,
            nonAlphanumericCheck,
            minCharacterCheck
        })

    }

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
                    <input type={changePassword1 ? "password" : "text"} name="password" className={classname} placeholder="Masukan Password Anda" disabled={sending} onFocus={handleOnFocusPassword} onBlur={handleOnBlurPassword} onKeyUp={handleKeyUpPassword} />
                    <div className="input-group-prepend">
                        <span className="input-group-text" onClick={() => {
                            setChangePassword1(changeStatus1);
                        }}>
                            {changeStatus1 ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" color="disabled" />}
                        </span>
                    </div>
                    {errorMessagePassword ? (
                        <div className="error-message">
                            <Info color="error" fontSize="small" /><span className="textErrorMessage">{errorMessagePassword}</span>
                        </div>
                    ) : null}
                    {pwdRequiste ?
                        <PWDRequisite
                            lowercaseFlag={checks.lowercaseCheck ? "validStrength" : "invalidStrength"}
                            uppercaseFlag={checks.uppercaseCheck ? "validStrength" : "invalidStrength"}
                            numericFlag={checks.numericCheck ? "validStrength" : "invalidStrength"}
                            nonAlphanumericFlag={checks.nonAlphanumericCheck ? "validStrength" : "invalidStrength"}
                            minCharacterFlag={checks.minCharacterCheck ? "validStrength" : "invalidStrength"}
                        /> : null}
                </div>
                <div className="input-group">
                    <input type={changePassword2 ? "password" : "text"} name="confirmPassword" className={classname} placeholder="Konfirmasi Ulang Password" disabled={sending} />
                    <div className="input-group-prepend">
                        <span className="input-group-text" onClick={() => {
                            setChangePassword2(changeStatus2);
                        }}>
                            {changeStatus2 ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" color="disabled" />}
                        </span>
                    </div>
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