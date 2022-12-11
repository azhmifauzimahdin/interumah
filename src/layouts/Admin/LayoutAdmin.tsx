import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import { Logo, LogoNoText } from "../../assets"
import { imgProfile1 } from "../../assets/dummy"
import { DropDownMenu } from "../../component"
import { IconDatabase, IconHome, IconMenu, IconPrint, IconProfile, IconSetting, IconShoppingBasket } from "../../component/Icon"
import "./LayoutAdmin.css"

const LayoutAdmin: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const toggle = () => setIsOpen(!isOpen)

    const optionMasterData = [
        {
            path: "/admin/data/admin",
            name: "Data Admin"
        },
        {
            path: "/admin/data/desainer",
            name: "Data Designer"
        },
        {
            path: "/admin/data/user",
            name: "Data User"
        },
        {
            path: "/admin/data/produk",
            name: "Data Produk"
        }
    ]
    const optionDataTransaksi = [
        {
            path: "/admin/transaksi/pesanan",
            name: "Data Pesanan"
        },
        {
            path: "/admin/transaksi/transfer",
            name: "Data Transfer"
        }
    ]

    const optionLaporan = [
        {
            path: "/admin/laporan/keuangan",
            name: "Laporan Keuangan"
        },
    ]

    const optionSetting = [
        {
            path: "/admin/pengaturan/ganti_password",
            name: "Ganti Password"
        },
        {
            path: "/admin/pengaturan/logout",
            name: "Logout"
        },

    ]
    const checkOpen = () => {
        if (!isOpen) setIsOpen(!isOpen)
    }

    return (
        <>
            <main className="layoutAdmin-container">
                <article className="layoutAdmin-sidebar" style={{ width: isOpen ? "20vw" : "6vw" }}>
                    <section className="layoutAdmin-topSection" style={{ justifyContent: isOpen ? "start" : "center" }}>
                        <section className="layoutAdmin-logo">
                            {isOpen ? <img src={Logo} alt="logo" /> : <img src={LogoNoText} alt="logo" />}
                        </section>
                    </section>
                    <section className="layoutAdmin-profile">
                        <section className="layoutAdmin-profileAdmin">
                            <IconProfile image={imgProfile1} />
                        </section>
                        <section className="layoutAdmin-nameAdmin" style={{ display: isOpen ? "flex" : "none" }}>Admin 1</section>
                    </section>
                    <section className="layoutAdmin-listMenu">
                        <DropDownMenu onClick={checkOpen} isOpen={isOpen} basePath="admin/dashboard" menu="Dashboard" icon={<IconHome className="IconMenu" />} />
                        <DropDownMenu onClick={checkOpen} isOpen={isOpen} basePath="admin/data" menu="Master Data" icon={<IconDatabase className="IconMenu" />} option={optionMasterData} />
                        <DropDownMenu onClick={checkOpen} isOpen={isOpen} basePath="admin/transaksi" menu="Data Transaksi" icon={<IconShoppingBasket className="IconMenu" />} option={optionDataTransaksi} />
                        <DropDownMenu onClick={checkOpen} isOpen={isOpen} basePath="admin/laporan" menu="Laporan" icon={<IconPrint className="IconMenu" />} option={optionLaporan} />
                        <DropDownMenu onClick={checkOpen} isOpen={isOpen} basePath="admin/pengaturan" menu="Pengaturan" icon={<IconSetting className="IconMenu" />} option={optionSetting} />
                    </section>
                    <section className="layoutAdmin-bars" onClick={toggle} >
                        <IconMenu />
                    </section>
                </article>
                <main className="layoutAdmin-content" style={{ marginLeft: isOpen ? "20vw" : "6vw" }}>
                    <nav className="layoutAdmin-header" />
                    <article className="layoutAdmin-article">
                        <Outlet />
                    </article>
                </main>
            </main>
        </>

    )
}

export default LayoutAdmin