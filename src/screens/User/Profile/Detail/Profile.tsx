import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { IlustrationOk } from "../../../../assets"
import { Button, ErrorMessage, ModalBlank } from "../../../../component"
import { IconClipboardList, IconLock, IconProfile, IconUserAlt, IconUserX } from "../../../../component/Icon"
import { ProfileService } from "../../../../services"
import { Profile, RequestUpdataProfile, RequestUpdateEmail } from "../../../../types/User"
import "./Profile.css"

const UserProfile: React.FC = () => {
    const location = useLocation()
    const [profile, setProfile] = useState<Profile>()
    const [sending, setSending] = useState<boolean>(false)
    const [errorMessageName, setErrorMessageName] = useState<string>('')
    const [errorMessageEmail, setErrorMessageEmail] = useState<string>('')
    const [errorMessageAge, setErrorMessageAge] = useState<string>('')
    const [errorMessagePhone, setErrorMessagePhone] = useState<string>('')
    const [errorMessageAddress, setErrorMessageAddress] = useState<string>('')
    const [errorMessageJob, setErrorMessageJob] = useState<string>('')

    //------ handle input image -------
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState<string>('')

    useEffect(() => {
        if (!selectedFile) {
            setPreview('')
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
    }

    //------Update Profile ------
    const updateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSending(true)
        try {
            const formData = new FormData(e.target as HTMLFormElement)
            let inputObject = Object.fromEntries(formData)

            console.log('inputObject', inputObject)
            await ProfileService.updateEmail(inputObject as any as RequestUpdateEmail)
            await ProfileService.updateProfile(inputObject as any as RequestUpdataProfile)
            await axios.put('http://103.250.10.102/users/image', inputObject, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })

            setSending(false)
            toggleModal()
            setErrorMessageName('')
            setErrorMessageAge('')
            setErrorMessagePhone('')
            setErrorMessageAddress('')
            setErrorMessageJob('')
        } catch (error: any) {
            setSending(false)
            console.log('error', error.response.data)
            setErrorMessageName(error.response.data.errors.name)
            setErrorMessageEmail(error.response.data.errors.email)
            setErrorMessageAge(error.response.data.errors.age)
            setErrorMessagePhone(error.response.data.errors.phone)
            setErrorMessageAddress(error.response.data.errors.address)
            setErrorMessageJob(error.response.data.errors.job)
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

    useEffect(() => {
        //------Get Profile Loged------
        ProfileService.getProfile()
            .then(response => setProfile(response.data.data))
            .catch(error => console.log("error", error))
    }, [profile])

    return (
        <>
            <main className="userProfile-container">
                <aside className="userProfile-aside">
                    <article className="userProfile-aside-profile">
                        <section className="userProfile-aside-profile-image" >
                            <IconProfile image={`http://${profile?.imageUrl}`} size="lg" />
                        </section>
                        <section className="userProfile-aside-profile-name">
                            {profile?.name}
                        </section>
                        <section className="userProfile-aside-profile-changeProfile">
                            <Link to={location.pathname} className="Link">Ubah Profil</Link>
                        </section>
                    </article>
                    <article className="userProfile-aside-menu">
                        <section className="userProfile-aside-menu-btn menuActive">
                            <IconUserAlt /><span className="userProfile-aside-menu-btnText">Detail Akun</span>
                        </section>
                        <Link to="/change_password" className="userProfile-aside-menu-btn">
                            <IconLock className="hoverIconMenu" color="gray" /><span className="userProfile-aside-menu-btnText">Ubah Password</span>
                        </Link>
                        <Link to="/pesananku" className="userProfile-aside-menu-btn">
                            <IconClipboardList className="hoverIconMenu" /><span className="userProfile-aside-menu-btnText">PesananKu</span>
                        </Link>
                    </article>
                    <article className="userProfile-aside-delete">
                        <section className="userProfile-aside-menu-btnDelete">
                            <IconUserX className="hoverIconUserX" /><span className="userProfile-aside-menu-btnTextDelete">Hapus Akun</span>
                        </section>
                    </article>
                </aside>
                <article className="userProfile-content">
                    <form onSubmit={updateProfile}>
                        <header className="userProfile-content-header">Detail Akun</header>
                        <section className="userProfile-content-desc" >Kelola informasi profil Anda, untuk mengotrol, melindungi dan mengamankan akun pribadi Anda.</section>
                        <hr className="userProfile-content-hr" />
                        <section className="userProfile-conten-detail">
                            <section className="userProfile-conten-detail-desc">
                                <header className="userProfile-conten-detail-desc-header">Info Profil</header>
                                <section className="userProfile-form">
                                    <section className="userProfile-form-label">Nama</section>
                                    <section className="userProfile-form-inputBox">
                                        <input type="text" defaultValue={profile?.name} name="name" className="userProfile-form-input" disabled={sending} />
                                        {errorMessageName ? (
                                            <ErrorMessage size="sm">{errorMessageName}</ErrorMessage>
                                        ) : null}
                                    </section>
                                </section>
                                <header className="userProfile-conten-detail-desc-header">Info Pribadi</header>
                                <section className="userProfile-form">
                                    <section className="userProfile-form-label">Email</section>
                                    <section className="userProfile-form-inputBox">
                                        <input type="text" defaultValue={profile?.email} name="email" className="userProfile-form-input" />
                                        {errorMessageEmail ? (
                                            <ErrorMessage size="sm">{errorMessageEmail}</ErrorMessage>
                                        ) : null}
                                    </section>
                                    {/* <button className="userProfile-form-submit">Ubah</button> */}
                                </section>
                                <section className="userProfile-form">
                                    <section className="userProfile-form-label">Nomor HP</section>
                                    <section className="userProfile-form-inputBox">
                                        <input type="number" defaultValue={profile?.phone} name="phone" className="userProfile-form-input" disabled={sending} />
                                        {errorMessagePhone ? (
                                            <ErrorMessage size="sm">{errorMessagePhone}</ErrorMessage>
                                        ) : null}
                                    </section>
                                </section>
                                <section className="userProfile-form">
                                    <section className="userProfile-form-label">Umur</section>
                                    <section className="userProfile-form-inputBox">
                                        <input type="number" defaultValue={profile?.age} name="age" className="userProfile-form-input" disabled={sending} />
                                        {errorMessageAge ? (
                                            <ErrorMessage size="sm">{errorMessageAge}</ErrorMessage>
                                        ) : null}
                                    </section>
                                </section>
                                <section className="userProfile-form">
                                    <section className="userProfile-form-label">Pekerjaan</section>
                                    <section className="userProfile-form-inputBox">
                                        <input type="text" defaultValue={profile?.job} name="job" className="userProfile-form-input" disabled={sending} />
                                        {errorMessageJob ? (
                                            <ErrorMessage size="sm">{errorMessageJob}</ErrorMessage>
                                        ) : null}
                                    </section>
                                </section>
                                <section className="userProfile-form">
                                    <section className="userProfile-form-label">Alamat</section>
                                    <section className="userProfile-form-inputBox">
                                        <textarea defaultValue={profile?.address} name="address" className="userProfile-form-textArea" disabled={sending} />
                                        {errorMessageAddress ? (
                                            <ErrorMessage size="sm">{errorMessageAddress}</ErrorMessage>
                                        ) : null}
                                    </section>
                                </section>
                            </section>
                            <section className="userProfile-conten-detail-image">
                                <section className="userProfile-aside-profile-image" >
                                    {selectedFile ?
                                        <IconProfile image={preview} />
                                        :
                                        <IconProfile image={`http://${profile?.imageUrl}`} />
                                    }
                                </section>
                                <section className="userProfile-content-btnimage">
                                    <label className="button-selectImage">
                                        Pilih Gambar
                                        <input type='file' onChange={onSelectFile} name="image" className="coba" accept="image/*" />
                                    </label>
                                </section>
                                <section className="userProfile-conten-detail-image-desc">
                                    Ukuran Gambar : maks 2MB Format Gamabr : JPEG. PNG
                                </section>
                            </section>
                        </section>
                        <section className="userProfile-content-footer">
                            <Button fontSize="sm" size="sm" >Simpan</Button>
                        </section>
                    </form>
                </article>
            </main>
            <ModalBlank
                visible={showModal}
                onClose={toggleModal}
                OnStay={onStayModal}
            >
                <section className="modalProfile-title">
                    Berhasil Update Profil
                </section>
                <section className="modalProfile-ilustration">
                    <img src={IlustrationOk} alt="Ilustration Successfull Payment" className="imgIlustrationProfile" />
                </section>
            </ModalBlank>
        </>
    )
}

export default UserProfile