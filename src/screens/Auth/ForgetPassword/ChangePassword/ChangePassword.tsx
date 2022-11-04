import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, PWDRequisite } from "../../../../component"
import { IconVisibility, IconVisibilityOff } from "../../../../component/Icon"
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

    const changePassword = () => {
        // e.preventDefault()
        setSending(true)
        try {
            setSending(false)
            navigate('/success_password_change')
        } catch (error) {
            setSending(false)
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
    return (
        <div className="container">
            <div className="titleChangePassword">Buat Password Baru Anda!</div>
            <div className="ChangePassword-form">
                <form onSubmit={changePassword}>
                    <div className="input-group">
                        <input type={changePassword1 ? "password" : "text"} name="password" className="form-control" placeholder="Masukan Password Anda" disabled={sending} onFocus={handleOnFocusPassword} onBlur={handleOnBlurPassword} onKeyUp={handleKeyUpPassword} />
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
                    </div>
                    <div className="input-group">
                        <input type={changePassword2 ? "password" : "text"} name="confirmPassword" className="form-control" placeholder="Konfirmasi Ulang Password" disabled={sending} />
                        <div className="input-group-prepend">
                            <span className="input-group-text" onClick={() => {
                                setChangePassword2(changeStatus2);
                            }}>
                                {changeStatus2 ? <IconVisibility /> : <IconVisibilityOff color="secondary" />}
                            </span>
                        </div>
                    </div>
                    <div className="btn-changePassword">
                        <Button>Buat Password</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword