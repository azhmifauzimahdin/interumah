import React from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { Logo } from "../../../assets"
import { Button } from "../../../component"
import "./ForgetPassword.css"

const ForgetPassword: React.FC = () => {
    const navigate = useNavigate()
    //------- Navigate Login ------
    const navigateLogin = () => {
        navigate('/login')
    }
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
                    <li><Button type="primary" size="sm" onClick={navigateLogin}>Masuk</Button></li>
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