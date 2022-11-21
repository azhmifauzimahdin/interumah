import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IlustrationForgetPasswordInputEmail } from "../../../../assets"
import { Button, ErrorMessage, Input } from "../../../../component"
import { ResetPasswordService } from "../../../../services"
import { EmailResetPasswordRequest } from "../../../../types/ResetPassword"
import "./InputEmail.css"

const InputEmail: React.FC = () => {
    const navigate = useNavigate()
    const [sending, setSending] = useState<boolean>(false)
    const [errorMessageEmail, setErrorMessageEmail] = useState<string>('')

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSending(true)
        try {
            const formData = new FormData(e.target as HTMLFormElement)
            const inputObject = Object.fromEntries(formData)

            await ResetPasswordService.RequestEmailResetPassword(inputObject as any as EmailResetPasswordRequest)
            setSending(false)
            navigate('/forget_password/check_email')
        } catch (error: any) {
            setSending(false)
            setErrorMessageEmail(error.response.data.message)
        }
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
                        <Input type="text" name="email" placeholder="Masukan Email Anda" inputType="prepend" disabled={sending} />
                        <div className="input-group-prependbutton">
                            <Button button="btnInput" disabled={sending}>Kirim</Button>
                        </div>
                    </section>
                    {errorMessageEmail ? (
                        <ErrorMessage>{errorMessageEmail}</ErrorMessage>
                    ) : null}
                </form>
            </article>
            <section className="forgetInputPassword-link">
                <span>Ingat password anda? <a href="/login">Login</a></span>
            </section>
        </article>
    )
}

export default InputEmail