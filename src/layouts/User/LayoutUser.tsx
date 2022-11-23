import React, { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { Logo, LogoFooter } from "../../assets"
import { imgProfile1 } from "../../assets/dummy"
import { Button, EstimateList, Input, ModalEstimate, NewEstimate, ProfileHover } from "../../component"
import { IconAppStore, IconBar, IconCalculator, IconChat, IconFacebook, IconFavorite, IconInstagram, IconNotification, IconPlayStore, IconProfile, IconTiktok, IconYoutube } from "../../component/Icon"
import "./LayoutUser.css"

const LayoutUser: React.FC = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [navigate, token])

    //------ Profile Hover -------
    const menuProfile = ['Akun Saya', 'DesainKu', 'Logout']

    const [showProfileHover, setShowProfileHover] = useState<boolean>(false)

    const profileHover = () => {
        setShowProfileHover(prevState => !prevState)
    }

    //------ Modal Estimate ------
    const [showModalEstimate, setShowModalEstimate] = useState<boolean>(false)

    const modalEstimate = () => {
        setShowModalEstimate(prevState => !prevState)
    }

    const onStayModalEstimate = (e: any) => {
        e.stopPropagation()
    }

    //------ Content Modal New Estimate -------
    const [estimateStatus, setEstimateStatus] = useState<boolean>(false)

    const onEstimateStatus = () => {
        setEstimateStatus(!estimateStatus)
    }

    //------- Content Modal Estimate
    const dataEstimateList = [
        {
            id: 1,
            data: "Hitung Estimasi 1"
        },
        {
            id: 2,
            data: "Hitung Estimasi 2"
        },
        {
            id: 3,
            data: "Hitung Estimasi 3"
        }

    ]

    return (
        <div className="user-layout">
            <nav className="user-navbar">
                <figure className="logo">
                    <a href="/dashboard">
                        <img src={Logo} alt="Logo Interumah" />
                    </a>
                </figure>
                <input type="checkbox" id="click" className="checkboxLayout" />
                <label htmlFor="click" className="menu-btn">
                    <i><IconBar /></i>
                </label>
                <section className="menu">
                    <section className="search">
                        <section className="input-group-button">
                            <Input type="text" name="email" inputType="search" placeholder="Masukan Email Anda" />
                            <div className="input-group-prependbutton">
                                <Button button="btnSearch" type="gray" >Search</Button>
                            </div>
                        </section>
                    </section>
                    <ul>
                        <li><IconFavorite /></li>
                        <li><IconNotification /></li>
                        <li><IconChat number={2} /></li>
                        <li><div className="verticalline"></div></li>
                        <li onClick={profileHover}><IconProfile image={imgProfile1} /></li>
                    </ul>
                    <ProfileHover data={menuProfile} visible={showProfileHover} onClose={profileHover} />
                </section>
            </nav>
            <main className="user-container">
                <section className="calculateEstimate" ><Button type="estimate" onClick={modalEstimate}><IconCalculator /><span className="textBtn">HITUNG ESTIMASI</span></Button></section>
                <ModalEstimate visible={showModalEstimate} onClose={modalEstimate} onStay={onStayModalEstimate} title="Hitung Estimasi">
                    {!estimateStatus ? (<NewEstimate onStart={onEstimateStatus} />) :
                        <main className="articleModal">
                            <article className="articleModal-aside"><EstimateList data={dataEstimateList} /></article>
                            <article className="articleModal-content"></article>
                        </main>
                    }
                </ModalEstimate>
                <Outlet />
            </main>
            <footer className="user-footer">
                <figure className="logo">
                    <img src={LogoFooter} alt="Logo" />
                </figure>
                <article className="articleMenuFooter">
                    <section className="section">
                        <header className="header">
                            Perusahaan
                        </header>
                        <ul>
                            <li><a href="#Tentang">Tentang</a></li>
                            <li><a href="#Produk">Produk</a></li>
                            <li><a href="#Blog">Blog</a></li>
                        </ul>
                    </section>
                    <section className="section">
                        <header className="header">
                            Kebijakan
                        </header>
                        <ul>
                            <li><a href="#Syarat">Syarat dan Ketentuan</a></li>
                            <li><a href="#Kebijakan">Kebijakan Interumah</a></li>
                        </ul>
                    </section>
                    <section className="section">
                        <header className="header">
                            Hubungi Kami
                        </header>
                        <ul>
                            <li><a href="#Bantuan">Bantuan</a></li>
                            <li><a href="#Lokasi">Lokasi</a></li>
                        </ul>
                    </section>
                    <section className="section">
                        <header className="header">
                            Perusahaan
                        </header>
                        <figure className="figure">
                            <a href="www.facebook.com"><IconFacebook /></a>
                            <a href="www.instagram.com"><IconInstagram /></a>
                            <a href="www.tiktok.com"><IconTiktok /></a>
                            <a href="www.youtube.com"><IconYoutube /></a>
                        </figure>
                        <header className="header">
                            Unduh Aplikasi
                        </header>
                        <figure className="figure">
                            <a href="www.playstore.com"><IconPlayStore /></a>
                            <a href="www.appstore.com"><IconAppStore /></a>
                        </figure>
                    </section>
                </article>
                <hr />
                <article className="articleCopyRight">
                    © 2022 Interumah | Interumah adalah merek milik PT Media Kreasi Abadi. Terdaftar pada Direktorat Jendral Kekayaan Intelektual Republik Indonesia.
                </article>
            </footer>
        </div >
    )
}

export default LayoutUser