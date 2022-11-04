import React from "react"
import { IlustrationSuccess } from "../../../../assets"
import "./SuccessPasswordChange.css"

const SuccessPasswordChange: React.FC = () => {
    return (
        <div className="container">
            <div className="titleSuccessChangePassword">
                <span className="titleBlue">Selamat!</span> <br />Anda Berhasil Membuat Password Baru
            </div>
            <div className="successChangePassword-ilustration">
                <img src={IlustrationSuccess} alt="Ilustration Success Change Password" className="imgIlustrationSuccessChangePassword" />
            </div>
            <div className="successChangePassword-link">
                <a href="/login">Masuk Kembali</a>
            </div>
        </div>
    )
}

export default SuccessPasswordChange