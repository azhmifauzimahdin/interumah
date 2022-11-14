import React from "react"
import { useNavigate } from "react-router-dom"
import { IlustrationForgetPasswordInputEmail } from "../../../../assets"
import { Button, Input } from "../../../../component"
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
            <div className="forgetInputPassword-form">
                <form onSubmit={sendEmail}>
                    <div className="input-group-button">
                        <Input type="text" name="email" className="prepend-btn" placeholder="Masukan Email Anda" />
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