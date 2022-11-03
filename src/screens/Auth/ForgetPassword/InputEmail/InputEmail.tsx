import React from "react"
import { useNavigate } from "react-router-dom"
import { IlustrationForgetPasswordInputEmail } from "../../../../assets"
import { Button } from "../../../../component"
import "./InputEmail.css"

const InputEmail: React.FC = () => {
    const navigate = useNavigate()
    const sendEmail = () => {
        navigate('/forget_password/check_email')
    }
    return (
        <div className="container">
            <div className="titleForgetPasswordInputEmail">Formulir Registrasi</div>
            <div className="forgetInputPassword-ilustration">
                <img src={IlustrationForgetPasswordInputEmail} alt="Ilustration Forget Password" className="imgIlustrationForgetInputPassword" />
            </div>
            <div className="forgetInputPasswrod-form">
                <form onSubmit={sendEmail}>
                    <div className="input-group-button">
                        <input type="text" className="form-control-button" />
                        <div className="input-group-prependbutton">
                            <Button button="btnInput">Kirim</Button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="forgetInputPassword-link">
                <span>Ingat password anda? <a href="/login">Login</a></span>
            </div>
        </div>
    )
}

export default InputEmail