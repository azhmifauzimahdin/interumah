import React from "react"
import { IlustrationForgetPasswordCheckEmail } from "../../../../assets"
import "./CheckEmail.css"

const CheckEmail: React.FC = () => {
    return (
        <div className="container">
            <div className="titleForgetPasswordCheckEmail">Email sudah dikirim! <br /> Check Emailmu sekarang</div>
            <div className="forgetCheckEmail-ilustration">
                <img src={IlustrationForgetPasswordCheckEmail} alt="Ilustration Forget Password" className="imgIlustrationForgetCheckEmail" />
            </div>
            <div className="forgetCheckEmail-link">
                <a href="/login">Masuk Kembali</a>
            </div>
        </div>
    )
}

export default CheckEmail