import React, { useEffect, useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { ImageBackgoundEstimate, Logo, LogoFooter } from "../../../assets"
import { Button, Estimate, EstimateList, EstimateRoom, Input, ModalEstimate, NewEstimate, NotificationCard, ProfileHover } from "../../../component"
import { IconAdd, IconAppStore, IconBar, IconCalculator, IconChatNav, IconFacebook, IconFavorite, IconInstagram, IconNotification, IconPlayStore, IconProfile, IconSearch, IconTiktok, IconYoutube } from "../../../component/Icon"
import { ProfileService } from "../../../services"
import { Profile } from "../../../types/User"
import "./LayoutUserOne.css"

const LayoutUserOne: React.FC = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [profile, setProfile] = useState<Profile>()

    //------ Search ------
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        // e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const inputObject = Object.fromEntries(formData)
        navigate(`/search?keyword=${inputObject.keyword}`)
    }

    //------ Show Notification -------
    const [showNotification, setShowNotification] = useState<boolean>(false)

    const Notification = () => {
        setShowNotification(prevState => !prevState)
    }

    //------ Profile Hover -------
    const menuProfile = ['Akun Saya', 'PesananKu', 'Logout']

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

    //------- Content Modal Estimate List--------
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
        },

    ]
    //------- Content Modal Estimate--------
    const dataEstimate = [
        {
            id: 1,
            message: "Halo! Anda bisa mengetahui estimasi ruangan yang ingin anda buat. Yuk!! Coba hitung sekarang",
            time: "10.20"
        },
    ]

    const [showMenuEstimate, setShowMenuEstimate] = useState<boolean>(false)
    const cobaya = () => {
        setShowMenuEstimate(!showMenuEstimate)
    }

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
        if (token) {
            //------Get Profile Loged------
            ProfileService.getProfile()
                .then(response => setProfile(response.data.data))
                .catch(error => {
                    console.log("error", error)
                    navigate('/logout')
                })
        }
    }, [navigate, token, profile])

    return (
        <main className="user-layout">
            <nav className="user-navbar">
                <figure className="logo">
                    <Link to="/dashboard">
                        <img src={Logo} alt="Logo Interumah" />
                    </Link>
                </figure>
                <input type="checkbox" id="click" className="checkboxLayout" />
                <label htmlFor="click" className="menu-btn">
                    <i><IconBar /></i>
                </label>
                <section className="menu">
                    <section className="search">
                        <form onSubmit={handleSearch}>
                            <section className="input-group-button">
                                <Input type="text" name="keyword" inputType="search" placeholder="Search" />
                                <div className="input-group-prependbutton">
                                    <Button button="btnSearch" type="gray" ><IconSearch /></Button>
                                </div>
                            </section>
                        </form>
                    </section>
                    <ul>
                        <li><Link to={'/favorite'}><IconFavorite /></Link></li>
                        <li onClick={Notification}><IconNotification /></li>
                        <li><Link to={'/message'}><IconChatNav number={0} /></Link></li>
                        <li><div className="verticalline"></div></li>
                        <li onClick={profileHover}><IconProfile image={`http://${profile?.imageUrl}`} /></li>
                    </ul>
                    <ProfileHover data={menuProfile} visible={showProfileHover} onClose={profileHover} />
                    <NotificationCard visible={showNotification} onClose={Notification} />
                </section>
            </nav>
            <main className="user-container">
                <section className="calculateEstimate" ><Button type="estimate" onClick={modalEstimate}><IconCalculator /><span className="textBtn">HITUNG ESTIMASI</span></Button></section>
                <ModalEstimate visible={showModalEstimate} onClose={modalEstimate} onStay={onStayModalEstimate} title="Hitung Estimasi">
                    {!estimateStatus ? (<NewEstimate onStart={onEstimateStatus} />) :
                        <main className="articleModal">
                            <article className="articleModal-asideBox">
                                <article className="articleModal-aside">
                                    <EstimateList data={dataEstimateList} />
                                </article>
                                <section className="articleModal-aside-btn">
                                    <IconAdd />
                                </section>
                            </article>
                            <article className="articleModal-content" style={{ backgroundImage: `url(${ImageBackgoundEstimate})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "8vw" }}>
                                <Estimate data={dataEstimate} />
                                <section className="estimate-menu">
                                    <section className="line-menuEstimate" onClick={cobaya} />
                                    {/* <EstimateRoomType /> : null */}
                                    {/* <EstimateRoomSpecifications /> : null */}
                                    {showMenuEstimate ?
                                        <EstimateRoom /> : null
                                    }
                                </section>
                            </article>
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
        </main >
    )
}

export default LayoutUserOne