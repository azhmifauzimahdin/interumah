import React from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { IlustrationRegister, Logo } from "../../../assets/index"
import { IconBar } from "../../../component/Icon"
import { Button } from "../../../component/index"
import './LayoutRegister.css'

const LayoutRegister: React.FC = () => {
    const navigate = useNavigate()
    // ------- Navigate --------
    const navigateLogin = () => {
        navigate('/login')
    }

    const navigateRegister = () => {
        navigate('/register')
    }
    return (
        <div className="register-layout">
            <nav className="register-navbar">
                <figure className="logo">
                    <a href="/">
                        <img src={Logo} alt="Logo Interumah" />
                    </a>
                </figure>
                <input type="checkbox" id="click" className="checkboxLayout" />
                <label htmlFor="click" className="menu-btn">
                    <i><IconBar /></i>
                </label>
                <ul>
                    <li><a href="/">Beranda</a></li>
                    <li><a href="/">Produk</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Perusahaan</a></li>
                    <li><a href="/">Bantuan</a></li>
                    <li><Button type="primary" size="sm" onClick={navigateLogin}>Masuk</Button></li>
                    <li><Button type="secondary" size="sm" onClick={navigateRegister}>Daftar</Button></li>
                </ul>
            </nav>
            <main className="register-container">
                <aside className="register-aside">
                    <figure>
                        <img src={IlustrationRegister} alt="Ilustration Register" className="img-ilustration-register" />
                    </figure>
                </aside>
                <section className="register-section">
                    <article className="register-article">
                        <Outlet />
                    </article>
                </section>
            </main>
        </div >
    )
}

export default LayoutRegister