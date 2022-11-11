import React from "react"
import { Outlet } from "react-router-dom"
import { Logo } from "../../../assets"
import { Button } from "../../../component"
import "./ForgetPassword.css"

const ForgetPassword: React.FC = () => {
    return (
        <div className="forgetpassword-layout">
            <nav className="forgetpassword-navbar">
                <figure className="logo">
                    <a href="/">
                        <img src={Logo} alt="Logo Interumah" />
                    </a>
                </figure>
                <ul>
                    <li><a href="/register">Belum Punya Akun?</a></li>
                    <li><a href="/login"><Button type="primary" size="sm">Masuk</Button></a></li>
                </ul>
            </nav>
            <main className="forgetpassword-container">
                <div className="rectanglebackground" />
                <section className="forgetpassword-section">
                    <article className="forgetpassword-article">
                        <Outlet />
                    </article>
                </section>
            </main>
        </div >
    )
}

export default ForgetPassword