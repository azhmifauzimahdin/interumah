import React from "react"
import { Outlet } from "react-router-dom"
import { IlustrationRegister, Logo } from "../../../assets/index"
import { IconBar } from "../../../component/Icon"
import { Button } from "../../../component/index"
import './LayoutRegister.css'

const LayoutRegister: React.FC = () => {
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
                    <li><a href="/login"><Button type="primary" size="sm">Masuk</Button></a></li>
                    <li><a href="/register"><Button type="secondary" size="sm">Daftar</Button></a></li>
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