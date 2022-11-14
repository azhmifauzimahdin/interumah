import React from "react"
import { IlustrationForgetPasswordCheckEmail } from "../../../../assets"
import "./CheckEmail.css"

const CheckEmail: React.FC = () => {
    return (
        <article className="container">
            <section className="titleForgetPasswordCheckEmail">Email sudah dikirim! <br /> Check Emailmu sekarang</section>
            <figure className="forgetCheckEmail-ilustration">
                <img src={IlustrationForgetPasswordCheckEmail} alt="Ilustration Forget Password" className="imgIlustrationForgetCheckEmail" />
            </figure>
            <section className="forgetCheckEmail-link">
                <a href="/login">Masuk Kembali</a>
            </section>
        </article>
    )
}

export default CheckEmail