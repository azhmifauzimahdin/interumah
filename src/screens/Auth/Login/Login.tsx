import React from "react"
import { Google } from "../../../assets"
import { Button } from "../../../component"
import './Login.css'

const Login: React.FC = () => {
    return (
        <div className="container">
            <h2>Selamat Datang di Interior <span className="rumah">Rumah</span></h2>
            <form action="">
                <div className="form-group">
                    <input type="email" name="email" className="form-control" placeholder="Masukan Email Anda" />
                </div>
                <div className="form-group">
                    <input type="password" name="password" className="form-control" placeholder="Masukan Password Anda" />
                </div>
                <div className="form-change-password">
                    <a href="/change_password" className="changePassword">Lupa Password?</a>
                </div>
                <div className="form-group">
                    <Button type="primary">Masuk</Button>
                </div>
            </form>
            <div className="or">
                <span>------------- OR ------------</span>
            </div>
            <Button type="secondary"><img src={Google} alt="Google" className="img-google" /> Masuk Menggunakan Google</Button>
        </div>
    )
}

export default Login