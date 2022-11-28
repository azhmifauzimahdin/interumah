import React from "react"
import { Link, useLocation } from "react-router-dom"
import { imgProfile1 } from "../../../../assets/dummy"
import { Button } from "../../../../component"
import { IconClipboardList, IconLock, IconProfile, IconUserAlt, IconUserX } from "../../../../component/Icon"
import "./Profile.css"

const UserProfile: React.FC = () => {
    const location = useLocation()
    return (
        <main className="userProfile-container">
            <aside className="userProfile-aside">
                <article className="userProfile-aside-profile">
                    <section className="userProfile-aside-profile-image" >
                        <IconProfile image={imgProfile1} size="lg" />
                    </section>
                    <section className="userProfile-aside-profile-name">
                        PT. Furniture Rumah
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
                    <section className="userProfile-aside-menu-btn">
                        <IconClipboardList className="hoverIconMenu" /><span className="userProfile-aside-menu-btnText">PesananKu</span>
                    </section>
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
                            <input type="text" value="PT. Furniture Rumah" className="userProfile-form-input" />
                            <button className="userProfile-form-submit">Ubah</button>
                        </section>
                        <section className="userProfile-form">
                            <section className="userProfile-form-label">Username</section>
                            <input type="text" value="ptinterumah24" className="userProfile-form-input" />
                            <button className="userProfile-form-submit">Ubah</button>
                        </section>
                        <header className="userProfile-conten-detail-desc-header">Info Pribadi</header>
                        <section className="userProfile-form">
                            <section className="userProfile-form-label">User ID</section>
                            <input type="text" value="12395393" className="userProfile-form-input" />
                        </section>
                        <section className="userProfile-form">
                            <section className="userProfile-form-label">Email</section>
                            <input type="text" value="inte****rum@gmail.com" className="userProfile-form-input" />
                            <button className="userProfile-form-submit">Ubah</button>
                        </section>
                        <section className="userProfile-form">
                            <section className="userProfile-form-label">Nomor HP</section>
                            <input type="text" value="082246639399" className="userProfile-form-input" />
                            <button className="userProfile-form-submit">Ubah</button>
                        </section>
                        <section className="userProfile-form">
                            <section className="userProfile-form-label">Alamat</section>
                            <textarea value="Dusun Krajan RT. 05 RW. 02 Alastengah Paiton, Probolinggo, Jawa Timur 72921" className="userProfile-form-textArea" />
                            <button className="userProfile-form-submitArea">Ubah</button>
                        </section>
                    </section>
                    <section className="userProfile-conten-detail-image">
                        <section className="userProfile-aside-profile-image" >
                            <IconProfile image={imgProfile1} />
                        </section>
                        <section className="userProfile-conten-detail-image-btn">
                            <button className="button-selectImage">Pilih Gambar</button>
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