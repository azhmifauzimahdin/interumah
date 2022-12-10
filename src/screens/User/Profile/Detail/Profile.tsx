import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { imgProfile1 } from "../../../../assets/dummy"
import { Button } from "../../../../component"
import { IconClipboardList, IconCloudUpload, IconLock, IconProfile, IconUserAlt, IconUserX } from "../../../../component/Icon"
import { ProfileService } from "../../../../services"
import { Profile } from "../../../../types/User"
import "./Profile.css"

const UserProfile: React.FC = () => {
    const location = useLocation()
    const [profile, setProfile] = useState<Profile>()

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

    useEffect(() => {
        ProfileService.getProfile()
            .then(response => setProfile(response.data.data))
            .catch(error => console.log("error", error))
    }, [])

    useEffect(() => {
        console.log("profile", profile)
    }, [profile])

    return (
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
                    <Link to="/pesanan" className="userProfile-aside-menu-btn">
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
                <header className="userProfile-content-header">Detail Akun</header>
                <section className="userProfile-content-desc" >Kelola informasi profil Anda, untuk mengotrol, melindungi dan mengamankan akun pribadi Anda.</section>
                <hr className="userProfile-content-hr" />
                <section className="userProfile-conten-detail">
                    <section className="userProfile-conten-detail-desc">
                        <header className="userProfile-conten-detail-desc-header">Info Profil</header>
                        <section className="userProfile-form">
                            <section className="userProfile-form-label">Nama</section>
                            <input type="text" defaultValue={profile?.name} className="userProfile-form-input" />
                        </section>
                        <header className="userProfile-conten-detail-desc-header">Info Pribadi</header>
                        <section className="userProfile-form">
                            <section className="userProfile-form-label">Email</section>
                            <input type="text" defaultValue={profile?.email} className="userProfile-form-input" disabled />
                        </section>
                        <section className="userProfile-form">
                            <section className="userProfile-form-label">Nomor HP</section>
                            <input type="number" defaultValue={profile?.phone} className="userProfile-form-input" />
                        </section>
                        <section className="userProfile-form">
                            <section className="userProfile-form-label">Umur</section>
                            <input type="number" defaultValue={profile?.age} className="userProfile-form-input" />
                        </section>
                        <section className="userProfile-form">
                            <section className="userProfile-form-label">Pekerjaan</section>
                            <input type="number" defaultValue={profile?.job} className="userProfile-form-input" />
                        </section>
                        <section className="userProfile-form">
                            <section className="userProfile-form-label">Alamat</section>
                            <textarea defaultValue={profile?.address} className="userProfile-form-textArea" />
                            {/* <button className="userProfile-form-submitArea">Ubah</button> */}
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
                                <input type='file' onChange={onSelectFile} className="coba" name="image" accept="image/*" />
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
            </article>
        </main>
    )
}

export default UserProfile