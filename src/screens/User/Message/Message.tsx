import React, { useState } from "react"
import { ImageBackgoundEstimate } from "../../../assets"
import { imgProfile1 } from "../../../assets/dummy"
import { Button, Input, Message, MessageList, MessageMenu, ProfileHover } from "../../../component"
import { IconPointThree, IconProfile, IconRoundPlus, IconSearch, IconSendMessage } from "../../../component/Icon"
import { EmoteSmile } from "../../../component/Icon/Emote"
import "./Message.css"

const UserMessage: React.FC = () => {
    //------- Message List --------
    const dataMessageList = [
        {
            id: 1,
            name: "Ilham Agustian Mubarak",
            role: "Desainer",
            message: "Untuk desain anda masih dalam progress peng...",
            date: "11/05",
            read: 2
        },
        {
            id: 2,
            name: "Ilham Agustian Mubarak",
            role: "Desainer",
            message: "Untuk desain anda masih dalam progress peng...",
            date: "11/05",
            read: 1
        },
        {
            id: 3,
            name: "Ilham Agustian Mubarak",
            role: "Desainer",
            message: "Untuk desain anda masih dalam progress peng...",
            date: "11/05",
            read: 2
        },
        {
            id: 4,
            name: "Ilham Agustian Mubarak",
            role: "Desainer",
            message: "Untuk desain anda masih dalam progress peng...",
            date: "11/05",
            read: 3
        },
        {
            id: 5,
            name: "Ilham Agustian Mubarak",
            role: "Desainer",
            message: "Untuk desain anda masih dalam progress peng...",
            date: "11/05",
            read: 0
        },
        {
            id: 6,
            name: "Ilham Agustian Mubarak",
            role: "Desainer",
            message: "Untuk desain anda masih dalam progress peng...",
            date: "11/05",
            read: 0
        },
        {
            id: 7,
            name: "Ilham Agustian Mubarak",
            role: "Desainer",
            message: "Untuk desain anda masih dalam progress peng...",
            date: "11/05",
            read: 0
        },
        {
            id: 8,
            name: "Ilham Agustian Mubarak",
            role: "Desainer",
            message: "Untuk desain anda masih dalam progress peng...",
            date: "11/05",
            read: 0
        },
        {
            id: 9,
            name: "Ilham Agustian Mubarak",
            role: "Desainer",
            message: "Untuk desain anda masih dalam progress peng...",
            date: "11/05",
            read: 0
        },
    ]

    //------- Message ------
    const dataMessage = [
        {
            id: 1,
            message: "Berapa perkiraan desain dapur mas?",
            time: "10.20"
        },
        {
            id: 2,
            message: "Untuk bahannya memakai apa pak?",
            time: "10.21"
        },
        {
            id: 3,
            message: "Kalau keramic berapa?",
            time: "10.22"
        },
        {
            id: 4,
            message: "Untuk bahannya memakai apa pak?",
            time: "10.23"
        },
        {
            id: 5,
            message: "Untuk bahannya memakai apa pak?",
            time: "10.23"
        },
        {
            id: 6,
            message: "Untuk bahannya memakai apa pak?",
            time: "10.23"
        },
        {
            id: 7,
            message: "Untuk bahannya memakai apa pak?",
            time: "10.23"
        },
        {
            id: 8,
            message: "Untuk bahannya memakai apa pak?",
            time: "10.23"
        },
    ]

    //------ Message recommendation ------
    const messageRecommendation = [
        {
            id: 1,
            message: "Hai, apakah bisa berdi...."
        },
        {
            id: 2,
            message: "Bisa buatkan RABnya..."
        },
        {
            id: 3,
            message: "Terimakasih!"
        },
    ]

    //------ menu message -------
    const MessageMenuList = ['Kunjungi Profil', 'Blokir Pengguna', 'Laporkan Pengguna', 'Hapus Pesan']

    const [showMessageMenu, setShowMessageMenu] = useState<boolean>(false)
    const MenuMessageHover = () => {
        setShowMessageMenu(prevState => !prevState)
        console.log('masuk');
    }
    return (
        <main className="userMessage-container">
            <section className="userMessage-boxMessage">
                <section className="userMessage-messageList">
                    <article className="userMessage-messageList-header">
                        <header className="userMessage-messageList-header-title">Pesan</header>
                        <section className="userMessage-messageList-header-search">
                            <section className="input-group-button">
                                <Input type="text" name="keyword" inputType="search" size="sm" placeholder="Masukan Email Anda" />
                                <div className="input-group-prependbutton">
                                    <button className="btnsearchmessage"><IconSearch size="sm" /></button>
                                </div>
                            </section>
                        </section>
                    </article>
                    <article className="userMessage-messageList-content">
                        <MessageList data={dataMessageList} />
                    </article>
                </section>
                <section className="userMessage-Message">
                    <article className="userMessage-header">
                        <section className="userMessage-header-userbox">
                            <section className="userMessage-header-userbox-profile"><IconProfile image={imgProfile1} /></section>
                            <section className="userMessage-header-userbox-desc">
                                <section className="userMessage-header-userbox-desc-name">
                                    Ilham Agustian
                                </section>
                                <section className="userMessage-header-userbox-desc-view">
                                    Aktif 10 menit lalu
                                </section>
                            </section>
                        </section>
                        <section className="userMessage-header-menu" onClick={MenuMessageHover}>
                            <IconPointThree />
                        </section>
                    </article>
                    <article className="userMessage-content" style={{ backgroundImage: `url(${ImageBackgoundEstimate})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "8vw" }}>
                        <Message data={dataMessage} />
                    </article>
                    <article className="userMessage-footer">
                        <section className="userMessage-footer-recommendation">
                            {messageRecommendation.length > 0 ? messageRecommendation.map(data => {
                                return (
                                    <span className="userMessage-footer-recommendation-btn" key={data.id}><Button size="sm" button="btnProduct" fontSize="sm" type="secondary">{data.message}</Button></span>
                                )
                            }) : null}
                        </section>
                        <section className="userMessage-footer-form">
                            <section className="userMessage-footer-form-input">
                                <form>
                                    <section className="input-group">
                                        <input type="text" className="inputMessage" />
                                        <section className="emot"><EmoteSmile /></section>
                                        <section className="plus">
                                            <IconRoundPlus />
                                        </section>
                                    </section>
                                </form>
                            </section>
                            <section className="userMessage-footer-form-send">
                                <section className="wrapper-sendMessage">
                                    <IconSendMessage />
                                </section>
                            </section>
                        </section>
                    </article>
                    <MessageMenu data={MessageMenuList} visible={showMessageMenu} onClose={MenuMessageHover} />
                </section>
            </section>
        </main>
    )
}

export default UserMessage