import React, { useState } from "react"
import { Button } from "../../../component"
import '../Auth.css'
import { Visibility, VisibilityOff } from "@material-ui/icons"
import { useNavigate } from "react-router-dom"
import { authService } from "../../../services"
import { RegisterRequest } from "../../../types/Register"

const Register: React.FC = () => {
    const [changePassword1, setChangePassword1] = useState(true)
    const [changePassword2, setChangePassword2] = useState(true)
    const changeStatus1 = changePassword1 === true ? false : true
    const changeStatus2 = changePassword2 === true ? false : true
    const [password, setPassword] = useState<string>('')
    const [repeatedPassword, setRepeatedPassword] = useState<string>('')
    const [checkTerms, setCheckTerms] = useState<boolean>(false)

    const navigate = useNavigate()

    const register = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isPasswordMatch) {
            try {
                const formData = new FormData(e.target as HTMLFormElement)
                console.log('formdata', formData)
                const inputObject = Object.fromEntries(formData)
                console.log('inputobject', inputObject)

                const register = await authService.register(inputObject as any as RegisterRequest)
                console.log('register', register)
                alert('Registasi berhasil. Silahkan login')
                navigate('/auth/login')
            } catch (error: any) {
                alert(error.response.data.message)
            }
        } else {
            alert('Password tidak sama')
        }
    }

    let isPasswordMatch: undefined | boolean = undefined
    if (password !== repeatedPassword) {
        isPasswordMatch = false
    } else {
        isPasswordMatch = true
    }
    const disableButton = !checkTerms ? true : false

    return (
        <div className="container">
            <h2>Formulir Registrasi</h2>
            <form onSubmit={register}>
                <div className="form-group">
                    <input type="hidden" name="firstName" />
                    <input type="hidden" name="lastName" />
                    <input type="hidden" name="phoneNumber" />
                    <input type="email" name="email" className="form-control" placeholder="Masukan Email Anda" />
                </div>
                <div className="input-group">
                    <input type={changePassword1 ? "password" : "text"} onChange={(e) => setPassword(e.target.value)} name="password" className="form-control" placeholder="Masukan Password Anda" value={password} />
                    <div className="input-group-prepend">
                        <span className="input-group-text" onClick={() => {
                            setChangePassword1(changeStatus1);
                        }}>
                            {changeStatus1 ? <Visibility /> : <VisibilityOff />}
                        </span>
                    </div>
                </div>
                <div className="input-group">
                    <input type={changePassword2 ? "password" : "text"} onChange={(e) => setRepeatedPassword(e.target.value)} className="form-control" placeholder="Konfirmasi Ulang Password" />
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
                        <input type="checkbox" name="checkbox" onChange={(e) => setCheckTerms(e.target.checked)} />Saya setuju dengan <span> Syarat dan Ketentuan</span> yang berlaku
                    </div>
                </div>
                <div className="form-group">
                    <Button type="primary" cek={disableButton}>Daftar</Button>
                </div>
            </form>
        </div>
    )
}

export default Register