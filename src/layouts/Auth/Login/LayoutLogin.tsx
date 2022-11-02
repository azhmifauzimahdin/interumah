import React from "react"
import { Outlet } from "react-router-dom"
import { AmicoLogin, Logo } from "../../../assets/index"
import { Button } from "../../../component/index"
import '../Auth.css'

const LayoutLogin: React.FC = () => {
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
                    <li><a href="/">Produk</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Perusahaan</a></li>
                    <li><a href="/">Bantuan</a></li>
                    <li><a href="/login"><Button type="primary">Masuk</Button></a></li>
                    <li><a href="/register"><Button type="secondary">Daftar</Button></a></li>
                </ul>
            </nav>
            <main className="auth-layout--container">
                <aside className="auth-layout--sidebar">
                    <figure>
                        <img src={AmicoLogin} alt="Gambar sidebar login" className="img--amico-login" />
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

export default LayoutLogin