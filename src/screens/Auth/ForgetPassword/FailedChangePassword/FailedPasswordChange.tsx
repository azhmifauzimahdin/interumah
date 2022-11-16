import React from "react"
import { IlustrationForgetPasswordInputEmail } from "../../../../assets"
import "./FailedPasswordChange.css"

const FailedPasswordChange: React.FC = () => {
    return (
        <article className="container">
            <section className="titleFailedChangePassword">
                <span className="titleYellow">Gagal!</span> <br />Tautan Telah Kadaluarsa
            </section>
            <figure className="failedChangePassword-ilustration">
                <img src={IlustrationForgetPasswordInputEmail} alt="Ilustration Failed Change Password" className="imgIlustrationFailedChangePassword" />
            </figure>
            <section className="failedChangePassword-link">
                <a href="/forget_password">Lupa Password</a>
            </section>
        </article>
    )
}

export default FailedPasswordChange