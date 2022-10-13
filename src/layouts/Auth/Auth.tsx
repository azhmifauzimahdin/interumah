import React from "react"
import { Outlet } from "react-router-dom"
import { Amico, Logo } from "../../assets"
import { Button } from "../../component"
import './Auth.css'

const Auth: React.FC = () => {
    return (
        <div className="auth-layout">
            <nav>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <input type="checkbox" id="click" />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                </label>
                <ul>
                    <li><a href="/">Beranda</a></li>
                    <li><a href="/">Kategori</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Company</a></li>
                    <li><Button type="secondary">Login</Button></li>
                    <li><Button type="primary">Sign Up</Button></li>
                </ul>
            </nav>
            <div className="auth-layout--container">
                <div className="auth-layout--sidebar">
                    <img src={Amico} alt="Amico" className="img-amico" />
                </div>
                <div className="auth-layout--content">
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Auth