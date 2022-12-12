import React from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { Logo } from "../../assets"
import { Button } from "../../component"
import { IconBar } from "../../component/Icon"
import "./LandingPage.css"

const LayoutLandingPage: React.FC = () => {
    const navigate = useNavigate()
    // ------- Navigate --------
    const navigateLogin = () => {
        navigate('/login')
    }

    const navigateRegister = () => {
        navigate('/register')
    }
    return (
        <div className="landingPage-layout">
            <nav className="landingPage-navbar">
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
                    {/* <li><a href="/">Blog</a></li> */}
                    <li><a href="/">Perusahaan</a></li>
                    <li><a href="/">Bantuan</a></li>
                    <li><Button type="primary" size="sm" onClick={navigateLogin}>Masuk</Button></li>
                    <li><Button type="secondary" size="sm" onClick={navigateRegister}>Daftar</Button></li>
                </ul>
            </nav>
            <main className="landingPage-container">
                <Outlet />
            </main>
        </div >
    )
}

export default LayoutLandingPage