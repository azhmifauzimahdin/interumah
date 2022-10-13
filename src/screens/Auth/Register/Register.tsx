import React from "react"
import { Google } from "../../../assets"
import { Button } from "../../../component"
import '../Auth.css'

const Register: React.FC = () => {
    return (
        <div className="container">
            <h2>Formulir Registrasi</h2>
            <form action="">
                <div className="form-group">
                    <input type="email" name="email" className="form-control" placeholder="Masukan Email Anda" />
                </div>
                <div className="form-group">
                    <input type="password" name="password" className="form-control" placeholder="Masukan Password Anda" />
                </div>
                <div className="form-group">
                    <input type="password" name="confirmPassword" className="form-control" placeholder="Konfirmasi Ulang Password" />
                </div>
                <div className="form-group">
                    <div className="checkboxRegister">
                        <input type="checkbox" name="checkbox" value="Saya" />Saya setuju dengan <span> Syarat dan Ketentuan</span> yang berlaku
                    </div>
                </div>
                <div className="form-group">
                    <Button type="primary">Daftar</Button>
                </div>
            </form>
        </div>
    )
}

export default Register