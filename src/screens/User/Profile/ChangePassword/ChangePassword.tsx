import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IlustrationOk } from "../../../../assets"
import { Button, ErrorMessage, ModalBlank, PWDRequisite } from "../../../../component"
import { IconClipboardList, IconLock, IconProfile, IconUserAlt, IconUserX, IconVisibility, IconVisibilityOff } from "../../../../component/Icon"
import { ProfileService } from "../../../../services"
import { Profile, RequestChangePassword } from "../../../../types/User"
import "./ChangePassword.css"

const UserChangePassword: React.FC = () => {
    // const location = useLocation()
    const [changePassword1, setChangePassword1] = useState(true)
    const [changePassword2, setChangePassword2] = useState(true)
    const changeStatus1 = changePassword1 === true ? false : true
    const changeStatus2 = changePassword2 === true ? false : true

    const [profile, setProfile] = useState<Profile>()
    const [sending, setSending] = useState<boolean>(false)
    const [errorMessagePasword, setErrorMessagePasword] = useState<string>('')
    const [errorMessageConfirmPasword, setErrorMessageConfirmPasword] = useState<string>('')


    //------Change Password ------
    const changePassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSending(true)
        try {
            const formData = new FormData(e.target as HTMLFormElement)
            let inputObject = Object.fromEntries(formData)

            await ProfileService.changePasswordProfile(inputObject as any as RequestChangePassword)
            setSending(false)
            toggleModal()
            setErrorMessagePasword('')
            setErrorMessageConfirmPasword('')
            const resetForm = e.target as HTMLFormElement
            resetForm.reset()
        } catch (error: any) {
            setSending(false)
            setErrorMessagePasword(error.response.data.errors.password)
            setErrorMessageConfirmPasword(error.response.data.errors.confirmPassword)
        }
    }

    //------ Modal Update Success-------
    const [showModal, setShowModal] = useState<boolean>(false)

    const toggleModal = () => {
        setShowModal(prevState => !prevState)
    }
    const onStayModal = (e: any) => {
        e.stopPropagation()
    }

    //----- Strength Password ------
    const [pwdRequiste, setPWDRequiste] = useState(false)
    const [checks, setChecks] = useState({
        lowercaseCheck: false,
        uppercaseCheck: false,
        numericCheck: false,
        nonAlphanumericCheck: false,
        minCharacterCheck: false
    })

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
        //------Get Profile Loged------
        ProfileService.getProfile()
            .then(response => setProfile(response.data.data))
            .catch(error => console.log("error", error))
    }, [profile])
    return (
        <>
            <main className="userChangePassword-container">
                <aside className="userChangePassword-aside">
                    <article className="userChangePassword-aside-profile">
                        <section className="userChangePassword-aside-profile-image" >
                            <IconProfile image={`http://${profile?.imageUrl}`} size="lg" />
                        </section>
                        <section className="userChangePassword-aside-profile-name">
                            {profile?.name}
                        </section>
                        <section className="userChangePassword-aside-profile-changeProfile">
                            <Link to={'/akunsaya'} className="Link">Ubah Profil</Link>
                        </section>
                    </article>
                    <article className="userChangePassword-aside-menu">
                        <Link to="/akunsaya" className="userChangePassword-aside-menu-btn">
                            <IconUserAlt className="hoverIconMenu" color="gray" /><span className="userChangePassword-aside-menu-btnText">Detail Akun</span>
                        </Link>
                        <Link to="/change_password" className="userChangePassword-aside-menu-btn menuActive">
                            <IconLock className="hoverIconMenu" /><span className="userChangePassword-aside-menu-btnText">Ubah Password</span>
                        </Link>
                        <Link to="/pesananku" className="userChangePassword-aside-menu-btn">
                            <IconClipboardList className="hoverIconMenu" /><span className="userChangePassword-aside-menu-btnText">PesananKu</span>
                        </Link>
                    </article>
                    <article className="userChangePassword-aside-delete">
                        <section className="userChangePassword-aside-menu-btnDelete">
                            <IconUserX className="hoverIconUserX" /><span className="userChangePassword-aside-menu-btnTextDelete">Hapus Akun</span>
                        </section>
                    </article>
                </aside>
                <article className="userChangePassword-content">
                    <header className="userChangePassword-content-header">Ubah Password</header>
                    <section className="userChangePassword-content-desc" >Masukkan password anda untuk mengubah password baru.</section>
                    <hr className="userChangePassword-content-hr" />
                    <section className="userChangePassword-content-detail">
                        <form onSubmit={changePassword}>
                            <section className="userChangePassword-form">
                                <section className="userChangePassword-form-label">Password Baru</section>
                                <section className="userChangePassword-form-inputBox">
                                    <input type={changePassword1 ? "password" : "text"} name="password" className="userChangePassword-form-input" disabled={sending} onFocus={handleOnFocusPassword} onBlur={handleOnBlurPassword} onKeyUp={handleKeyUpPassword} />
                                    <section className="input-group-prependProfile">
                                        <span className="input-group-text" onClick={() => { setChangePassword1(changeStatus1) }}>
                                            {changeStatus1 ? <IconVisibility /> : <IconVisibilityOff color="secondary" />}
                                        </span>
                                    </section>
                                    {errorMessagePasword ? (
                                        <ErrorMessage size="sm">{errorMessagePasword}</ErrorMessage>
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
                            </section>
                            <section className="userChangePassword-form">
                                <section className="userChangePassword-form-label">Konfirmasi Password Baru</section>
                                <section className="userChangePassword-form-inputBox">
                                    <input type={changePassword2 ? "password" : "text"} name="confirmPassword" className="userChangePassword-form-input" disabled={sending} />
                                    <section className="input-group-prependProfile">
                                        <span className="input-group-text" onClick={() => { setChangePassword2(changeStatus2) }}>
                                            {changeStatus2 ? <IconVisibility /> : <IconVisibilityOff color="secondary" />}
                                        </span>
                                    </section>
                                    {errorMessageConfirmPasword ? (
                                        <ErrorMessage size="sm">{errorMessageConfirmPasword}</ErrorMessage>
                                    ) : null}
                                </section>
                            </section>
                            {/* <section className="userChangePassword-form">
                        <section className="userChangePassword-form-label">Kode OTP verifikasi</section>
                        <input type="text" className="userChangePassword-form-input" />
                    </section> */}
                            <section className="userChangePassword-content-detail-submit">
                                <Button size="sm" fontSize="sm">Ubah Password</Button>
                            </section>
                        </form>
                    </section>
                </article>
            </main>
            <ModalBlank
                visible={showModal}
                onClose={toggleModal}
                OnStay={onStayModal}
            >
                <section className="modalProfile-title">
                    Berhasil Ubah Password
                </section>
                <section className="modalProfile-ilustration">
                    <img src={IlustrationOk} alt="Ilustration Successfull Payment" className="imgIlustrationProfile" />
                </section>
            </ModalBlank>
        </>
    )
}

export default UserChangePassword