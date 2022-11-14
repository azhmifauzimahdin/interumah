import React from "react"
import { IlustrationSuccess } from "../../../../assets"
import "./SuccessPasswordChange.css"

const SuccessPasswordChange: React.FC = () => {
    return (
        <article className="container">
            <section className="titleSuccessChangePassword">
                <span className="titleBlue">Selamat!</span> <br />Anda Berhasil Membuat Password Baru
            </section>
            <figure className="successChangePassword-ilustration">
                <img src={IlustrationSuccess} alt="Ilustration Success Change Password" className="imgIlustrationSuccessChangePassword" />
            </figure>
            <section className="successChangePassword-link">
                <a href="/login">Masuk Kembali</a>
            </section>
        </article>
    )
}

export default SuccessPasswordChange