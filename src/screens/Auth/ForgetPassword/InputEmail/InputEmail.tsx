import React from "react"
import { IlustrationForgetPasswordInputEmail } from "../../../../assets"
import { Button } from "../../../../component"
import "./InputEmail.css"

const InputEmail: React.FC = () => {
    return (
        <div className="container">
            <div className="titleForgetPasswordInputEmail">Formulir Registrasi</div>
            <div className="forgetInputPassword-ilustration">
                <img src={IlustrationForgetPasswordInputEmail} alt="Ilustration Forget Password" className="imgIlustrationForgetInputPassword" />
            </div>
            <div className="forgetInputPasswrod-form">
                <div className="input-group-button">
                    <input type="text" className="form-control-button" />
                    <div className="input-group-prependbutton">
                        <Button button="btnInput">Kirim</Button>
                    </div>
                </div>
            </div>
            <div className="forgetInputPassword-link">
                <span>Ingat password anda? <a href="/login">Login</a></span>
            </div>
        </div>
    )
}

export default InputEmail