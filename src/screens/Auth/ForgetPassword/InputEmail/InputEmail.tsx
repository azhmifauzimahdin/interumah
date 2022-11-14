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
        <article className="container">
            <header className="titleForgetPasswordInputEmail">Formulir Registrasi</header>
            <figure className="forgetInputPassword-ilustration">
                <img src={IlustrationForgetPasswordInputEmail} alt="Ilustration Forget Password" className="imgIlustrationForgetInputPassword" />
            </figure>
            <article className="forgetInputPassword-form">
                <form onSubmit={sendEmail}>
                    <section className="input-group-button">
                        <Input type="text" name="email" className="prepend-btn" placeholder="Masukan Email Anda" />
                        <div className="input-group-prependbutton">
                            <Button button="btnInput">Kirim</Button>
                        </div>
                    </section>
                </form>
            </article>
            <section className="forgetInputPassword-link">
                <span>Ingat password anda? <a href="/login">Login</a></span>
            </section>
        </article>
    )
}

export default InputEmail