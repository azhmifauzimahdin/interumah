import React from "react"
import { Outlet } from "react-router-dom"
import { AmicoRegister, Logo } from "../../../assets/index"
import { Button } from "../../../component/index"
import '../Auth.css'

const LayoutRegister: React.FC = () => {
    return (
        <div className="auth-layout">
            <nav>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
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
            <div className="auth-layout--container">
                <div className="auth-layout--sidebar">
                    <img src={AmicoRegister} alt="Amico" className="img--amico-register" />
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

export default LayoutRegister