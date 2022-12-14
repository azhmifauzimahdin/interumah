import React, { useState } from "react"
import { Button, ErrorMessage, Input, LoadingScreen, ModalBlank, PWDRequisite } from "../../../component"
import { authService } from "../../../services"
import { RegisterRequest } from "../../../types/Register"
import { IconVisibility, IconVisibilityOff } from "../../../component/Icon"
import { IlustrationSuccess } from "../../../assets"
import { useNavigate } from "react-router-dom"
import './Register.css'

const Register: React.FC = () => {
    window.scrollTo(0, 0)
    const navigate = useNavigate()
    const [changePassword1, setChangePassword1] = useState(true)
    const [changePassword2, setChangePassword2] = useState(true)
    const changeStatus1 = changePassword1 === true ? false : true
    const changeStatus2 = changePassword2 === true ? false : true

    const [checkTerms, setCheckTerms] = useState<boolean>(false)
    const [errorMessageEmail, setErrorMessageEmail] = useState<string>('')
    const [errorMessagePassword, setErrorMessagePassword] = useState<string>('')
    const [sending, setSending] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [pwdRequiste, setPWDRequiste] = useState(false)
    const [checks, setChecks] = useState({
        lowercaseCheck: false,
        uppercaseCheck: false,
        numericCheck: false,
        nonAlphanumericCheck: false,
        minCharacterCheck: false
    })

    const register = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSending(true)
        setLoading(true)
        setErrorMessageEmail('')
        setErrorMessagePassword('')
        try {
            const formData = new FormData(e.target as HTMLFormElement)
            let inputObject = Object.fromEntries(formData)

            await authService.register(inputObject as any as RegisterRequest)
            setSending(false)
            setLoading(false)
            toggleModal()
            const resetForm = e.target as HTMLFormElement
            resetForm.reset()
        } catch (error: any) {
            setSending(false)
            setLoading(false)
            setErrorMessageEmail(error.response.data.errors.email)
            setErrorMessagePassword(error.response.data.errors.password)
        }
    }

    const disableButton = !checkTerms ? true : false
    const classNameEmail = errorMessageEmail ? "input-invalid" : ""
    const classNamePassword = errorMessagePassword ? "input-invalid" : ""

    const handleOnFocusPassword = () => {
        setPWDRequiste(true)
    }
    const handleOnBlurPassword = () => {
        setPWDRequiste(false)
    }
    const handleKeyUpPassword = (e: any) => {
        const { value } = e.target
        const lowercaseCheck = /[a-z]/.test(value)
        const uppercaseCheck = /[A-Z]/.test(value)
        const numericCheck = /[\d]/.test(value)
        const nonAlphanumericCheck = /[\W]/.test(value)
        const minCharacterCheck = /.{8,}/.test(value)
        setChecks({
            lowercaseCheck,
            uppercaseCheck,
            numericCheck,
            nonAlphanumericCheck,
            minCharacterCheck
        })

    }

    const [showModal, setShowModal] = useState<boolean>(false)

    const toggleModal = () => {
        setShowModal(prevState => !prevState)
    }
    const onStayModal = (e: any) => {
        e.stopPropagation()
    }
    const navigateLogin = () => {
        navigate('/login')
    }

    return (
        <>
            <article className="container">
                <header className="titleRegister">Formulir Registrasi</header>
                <form onSubmit={register} id="ya">
                    <section className="form-group">
                        <Input type="email" name="email" inputValid={classNameEmail} placeholder="Masukan Email Anda" disabled={sending} />
                        {errorMessageEmail ? (
                            <ErrorMessage>{errorMessageEmail}</ErrorMessage>
                        ) : null}
                    </section>
                    <section className="input-group-register">
                        <Input type={changePassword1 ? "password" : "text"} name="password" inputValid={classNamePassword} placeholder="Masukan Password Anda" disabled={sending} onFocus={handleOnFocusPassword} onBlur={handleOnBlurPassword} onKeyUp={handleKeyUpPassword} />
                        <div className="input-group-prepend">
                            <span className="input-group-text" onClick={() => {
                                setChangePassword1(changeStatus1);
                            }}>
                                {changeStatus1 ? <IconVisibility /> : <IconVisibilityOff color="secondary" />}
                            </span>
                        </div>
                        {errorMessagePassword ? (
                            <ErrorMessage>{errorMessagePassword}</ErrorMessage>
                        ) : null}
                        {pwdRequiste ?
                            <PWDRequisite
                                lowercaseFlag={checks.lowercaseCheck ? "validStrength" : "invalidStrength"}
                                uppercaseFlag={checks.uppercaseCheck ? "validStrength" : "invalidStrength"}
                                numericFlag={checks.numericCheck ? "validStrength" : "invalidStrength"}
                                nonAlphanumericFlag={checks.nonAlphanumericCheck ? "validStrength" : "invalidStrength"}
                                minCharacterFlag={checks.minCharacterCheck ? "validStrength" : "invalidStrength"}
                            /> : null}
                    </section>
                    <section className="input-group-register">
                        <Input type={changePassword2 ? "password" : "text"} name="confirmPassword" inputValid={classNamePassword} placeholder="Konfirmasi Ulang Password" disabled={sending} />
                        <div className="input-group-prepend">
                            <span className="input-group-text" onClick={() => {
                                setChangePassword2(changeStatus2);
                            }}>
                                {changeStatus2 ? <IconVisibility /> : <IconVisibilityOff color="secondary" />}
                            </span>
                        </div>
                    </section>
                    <section className="form-group">
                        <div className="checkboxRegister">
                            <input type="checkbox" onChange={(e) => setCheckTerms(e.target.checked)} />Saya setuju dengan <span> Syarat dan Ketentuan</span> yang berlaku
                        </div>
                    </section>
                    <section className="form-group">
                        <Button type="primary" disabled={disableButton || sending}>Daftar</Button>
                    </section>
                    <section className="linktoLogin">
                        <span>Sudah punya akun? <a href="/login">Masuk</a></span>
                    </section>
                </form>
                {loading && <LoadingScreen />}
            </article>
            <ModalBlank
                visible={showModal}
                onClose={toggleModal}
                OnStay={onStayModal}
            >
                <section className="modalRegisterSuccess-title">
                    <span className="titleBlue">Selamat!</span> <br />Anda Berhasil Membuat Akun Baru
                </section>
                <section className="modalRegisterSuccess-ilustration">
                    <img src={IlustrationSuccess} alt="Ilustration Register Success" className="imgIlustrationRegisterSuccess" />
                </section>
                <section className="modalRegisterSuccess-link">
                    <span onClick={navigateLogin}>Masuk Kembali</span>
                </section>

            </ModalBlank>
        </>
    )
}

export default Register