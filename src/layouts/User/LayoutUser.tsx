import React from "react"
import { Outlet } from "react-router-dom"
import { Logo } from "../../assets"
import { Button } from "../../component"
import { IconBar } from "../../component/Icon"
import "./LayoutUser.css"

const LayoutUser: React.FC = () => {
    return (
        <div className="user-layout">
            <nav className="user-navbar">
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
                    <li><a href="/login"><Button type="secondary">Masuk</Button></a></li>
                    <li><a href="/register"><Button type="primary">Daftar</Button></a></li>
                </ul>
            </nav>
            <main className="user-container">
                <Outlet />
            </main>
        </div >
    )
}

export default LayoutUser