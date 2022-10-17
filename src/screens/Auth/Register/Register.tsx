import React, { useState } from "react"
import { Button } from "../../../component"
import '../Auth.css'
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Register: React.FC = () => {
    const [changePassword1, setChangePassword1] = useState(true)
    const [changePassword2, setChangePassword2] = useState(true)
    const changeStatus1 = changePassword1 === true ? false : true
    const changeStatus2 = changePassword2 === true ? false : true
    return (
        <div className="container">
            <h2>Formulir Registrasi</h2>
            <form action="">
                <div className="form-group">
                    <input type="email" name="email" className="form-control" placeholder="Masukan Email Anda" />
                </div>
                <div className="input-group">
                    <input type={changePassword1 ? "password" : "text"} name="password" className="form-control" placeholder="Masukan Password Anda" />
                    <div className="input-group-prepend">
                        <span className="input-group-text" onClick={() => {
                            setChangePassword1(changeStatus1);
                        }}>
                            {changeStatus1 ? <Visibility /> : <VisibilityOff />}
                        </span>
                    </div>
                </div>
                <div className="input-group">
                    <input type={changePassword2 ? "password" : "text"} name="confirmPassword" className="form-control" placeholder="Konfirmasi Ulang Password" />
                    <div className="input-group-prepend">
                        <span className="input-group-text" onClick={() => {
                            setChangePassword2(changeStatus2);
                        }}>
                            {changeStatus2 ? <Visibility /> : <VisibilityOff />}
                        </span>
                    </div>
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