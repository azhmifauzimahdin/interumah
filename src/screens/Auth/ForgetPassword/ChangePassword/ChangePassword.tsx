import React, { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Button, Input, PWDRequisite } from "../../../../component"
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
            // navigate('/success_password_change')
        } catch (error) {
            setSending(false)
            console.log('error', error);
        }
    }

    const getEmail = async () => {
        try {
            const response = await ResetPasswordService.GetEmailChangePassword(token)
            setemail(response.data.data.email)
        } catch (error: any) {
            console.log('error', error);
        }
    }

    // Password Validation
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

    useEffect(() => {
        getEmail()
    }, [])

    return (
        <article className="container">
            <header className="titleChangePassword">Buat Password Baru Anda!</header>
            <article className="ChangePassword-form">
                <form onSubmit={changePassword}>
                    <section className="input-group">
                        <Input type={changePassword1 ? "password" : "text"} name="password" className="form-control" placeholder="Masukan Password Anda" disabled={sending} onFocus={handleOnFocusPassword} onBlur={handleOnBlurPassword} onKeyUp={handleKeyUpPassword} />
                        <div className="input-group-prepend">
                            <span className="input-group-text" onClick={() => {
                                setChangePassword1(changeStatus1);
                            }}>
                                {changeStatus1 ? <IconVisibility /> : <IconVisibilityOff color="secondary" />}
                            </span>
                        </div>
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
                        <Input type={changePassword2 ? "password" : "text"} name="confirmPassword" className="form-control" placeholder="Konfirmasi Ulang Password" disabled={sending} />
                        <div className="input-group-prepend">
                            <span className="input-group-text" onClick={() => {
                                setChangePassword2(changeStatus2);
                            }}>
                                {changeStatus2 ? <IconVisibility /> : <IconVisibilityOff color="secondary" />}
                            </span>
                        </div>
                    </section>
                    <section className="btn-changePassword">
                        <Button>Buat Password</Button>
                    </section>
                </form>
            </article>
        </article>
    )
}

export default ChangePassword