import React from "react"
import { Outlet } from "react-router-dom"
import { IlustrationLogin, Logo } from "../../../assets/index"
import { IconBar } from "../../../component/Icon"
import { Button } from "../../../component/index"
import './LayoutLogin.css'

const LayoutLogin: React.FC = () => {
    return (
        <div className="login-layout">
            <nav className="login-navbar">
                <figure className="logo">
                    <img src={Logo} alt="Logo Interumah" />
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
                    <li><a href="/login"><Button type="primary">Masuk</Button></a></li>
                    <li><a href="/register"><Button type="secondary">Daftar</Button></a></li>
                </ul>
            </nav>
            <main className="login-container">
                <aside className="login-aside">
                    <figure>
                        <img src={IlustrationLogin} alt="Ilustration Login" className="img-ilustration-login" />
                    </figure>
                </aside>
                <section className="login-section">
                    <article className="login-article">
                        <Outlet />
                    </article>
                </section>
            </main>
        </div >
    )
}

export default LayoutLogin