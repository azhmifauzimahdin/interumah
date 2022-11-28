import React from "react"
import { Link, useLocation } from "react-router-dom"
import { imgProfile1 } from "../../../../assets/dummy"
import { Button } from "../../../../component"
import { IconClipboardList, IconLock, IconProfile, IconUserAlt, IconUserX } from "../../../../component/Icon"
import "./ChangePassword.css"

const UserChangePassword: React.FC = () => {
    const location = useLocation()
    return (
        <main className="userChangePassword-container">
            <aside className="userChangePassword-aside">
                <article className="userChangePassword-aside-profile">
                    <section className="userChangePassword-aside-profile-image" >
                        <IconProfile image={imgProfile1} size="lg" />
                    </section>
                    <section className="userChangePassword-aside-profile-name">
                        PT. Furniture Rumah
                    </section>
                    <section className="userChangePassword-aside-profile-changeProfile">
                        <Link to={location.pathname} className="Link">Ubah Profil</Link>
                    </section>
                </article>
                <article className="userChangePassword-aside-menu">
                    <Link to="/akunsaya" className="userChangePassword-aside-menu-btn">
                        <IconUserAlt className="hoverIconMenu" color="gray" /><span className="userChangePassword-aside-menu-btnText">Detail Akun</span>
                    </Link>
                    <Link to="/change_password" className="userChangePassword-aside-menu-btn menuActive">
                        <IconLock className="hoverIconMenu" /><span className="userChangePassword-aside-menu-btnText">Ubah Password</span>
                    </Link>
                    <section className="userChangePassword-aside-menu-btn">
                        <IconClipboardList className="hoverIconMenu" /><span className="userChangePassword-aside-menu-btnText">PesananKu</span>
                    </section>
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
                    <section className="userChangePassword-form">
                        <section className="userChangePassword-form-label">Password Baru</section>
                        <input type="text" className="userChangePassword-form-input" />
                    </section>
                    <section className="userChangePassword-form">
                        <section className="userChangePassword-form-label">Konfirmasi Password Baru</section>
                        <input type="text" className="userChangePassword-form-input" />
                    </section>
                    <section className="userChangePassword-form">
                        <section className="userChangePassword-form-label">Kode OTP verifikasi</section>
                        <input type="text" className="userChangePassword-form-input" />
                    </section>
                    <section className="userChangePassword-content-detail-submit">
                        <Button size="sm" fontSize="sm">Ubah Password</Button>
                    </section>
                    <section></section>
                </section>
            </article>
        </main>
    )
}

export default UserChangePassword