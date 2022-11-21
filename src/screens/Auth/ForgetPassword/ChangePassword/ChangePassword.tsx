import React, { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Button, ErrorMessage, Input, PWDRequisite } from "../../../../component"
import { IconVisibility, IconVisibilityOff } from "../../../../component/Icon"
import { ResetPasswordService } from "../../../../services"
import { ChangePasswordData } from "../../../../types/ResetPassword"
import "./ChangePassword.css"

const ChangePassword: React.FC = () => {
    const navigate = useNavigate()
    const [changePassword1, setChangePassword1] = useState(true)
    const [changePassword2, setChangePassword2] = useState(true)
    const changeStatus1 = changePassword1 === true ? false : true
    const changeStatus2 = changePassword2 === true ? false : true
    const [sending, setSending] = useState<boolean>(false)
    const [pwdRequiste, setPWDRequiste] = useState(false)
    const [checks, setChecks] = useState({
        lowercaseCheck: false,
        uppercaseCheck: false,
        numericCheck: false,
        nonAlphanumericCheck: false,
        minCharacterCheck: false
    })
    let [searchParams] = useSearchParams()
    const token = searchParams.get("token")
    const [email, setemail] = useState<string>()
    const [errorMessagePassword, setErrorMessagePassword] = useState<string>('')

    //----- Change Password -----
    const changePassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSending(true)
        try {
            const formData = new FormData(e.target as HTMLFormElement)
            const inputObject = Object.fromEntries(formData)
            const objectChangePassword = {
                ...inputObject,
                email: email,
                token: token
            }

            console.log('objectChangePassword', objectChangePassword);

            await ResetPasswordService.ChangePasswordPost(objectChangePassword as any as ChangePasswordData)
            setSending(false)
            navigate('/success_password_change')
        } catch (error: any) {
            setSending(false)
            setErrorMessagePassword(error.response.data.errors.password)
        }
    }

    // ----- Password Validation -----
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

    //----- Get Email -----
    useEffect(() => {
        ResetPasswordService.GetEmailChangePassword(token)
            .then(response => {
                setemail(response.data.data.email)
            })
            .catch(error => {
                console.log('error', error)
                navigate('/failed_password_change')
            })
    }, [navigate, token])

    return (
        <>
            <article className="containerChangePassword">
                <header className="titleChangePassword">Buat Password Baru Anda!</header>
                <article className="ChangePassword-form">
                    <form onSubmit={changePassword}>
                        <section className="input-group">
                            <Input type={changePassword1 ? "password" : "text"} name="password" placeholder="Masukan Password Anda" disabled={sending} onFocus={handleOnFocusPassword} onBlur={handleOnBlurPassword} onKeyUp={handleKeyUpPassword} />
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
                        <section className="input-group">
                            <Input type={changePassword2 ? "password" : "text"} name="confirmPassword" placeholder="Konfirmasi Ulang Password" disabled={sending} />
                            <div className="input-group-prepend">
                                <span className="input-group-text" onClick={() => {
                                    setChangePassword2(changeStatus2);
                                }}>
                                    {changeStatus2 ? <IconVisibility /> : <IconVisibilityOff color="secondary" />}
                                </span>
                            </div>
                        </section>
                        <section className="btn-changePassword">
                            <Button disabled={sending}>Buat Password</Button>
                        </section>
                    </form>
                </article>
            </article>
        </>
    )
}

export default ChangePassword