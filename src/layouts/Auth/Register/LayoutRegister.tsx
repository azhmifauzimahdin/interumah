import React from "react"
import { Outlet } from "react-router-dom"
import { AmicoRegister, Logo } from "../../../assets/index"
import { Button } from "../../../component/index"
import '../Auth.css'

const LayoutRegister: React.FC = () => {
    return (
        <div className="auth-layout">
            <nav>
                <figure className="logo">
                    <img src={Logo} alt="Logo Interumah" />
                </figure>
                <input type="checkbox" id="click" className="checkboxLayout" />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                </label>
                <ul>
                    <li><a href="/">Beranda</a></li>
                    <li><a href="/">Kategori</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Company</a></li>
                    <li><a href="/auth/login"><Button type="secondary">Login</Button></a></li>
                    <li><a href="/auth/register"><Button type="primary">Sign Up</Button></a></li>
                </ul>
            </nav>
            <main className="auth-layout--container">
                <aside className="auth-layout--sidebar">
                    <figure>
                        <img src={AmicoRegister} alt="Gambar sidebar register" className="img--amico-register" />
                    </figure>
                </aside>
                <section className="auth-layout--content">
                    <article className="content">
                        <Outlet />
                    </article>
                </section>
            </main>
        </div >
    )
}

export default LayoutRegister