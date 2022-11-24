import React from "react"
import { Input, MessageList } from "../../../component"
import { IconSearch } from "../../../component/Icon"
import "./Message.css"

const UserMessage: React.FC = () => {
    //------- Content Modal Estimate List--------
    const dataMessageList = [
        {
            id: 1,
            name: "Ilham Agustian bawah sadar manusia",
            role: "Desainer",
            message: "Untuk desain anda masih dalam progress peng...",
            date: "11/05",
            read: 0
        },
        {
            id: 2,
            name: "Ilham Agustian bawah sadar manusia",
            role: "Desainer",
            message: "Untuk desain anda masih dalam progress peng...",
            date: "11/05",
            read: 0
        },
        {
            id: 3,
            name: "Ilham Agustian bawah sadar manusia",
            role: "Desainer",
            message: "Untuk desain anda masih dalam progress peng...",
            date: "11/05",
            read: 0
        },
        {
            id: 4,
            name: "Ilham Agustian bawah sadar manusia",
            role: "Desainer",
            message: "Untuk desain anda masih dalam progress peng...",
            date: "11/05",
            read: 0
        },
        {
            id: 5,
            name: "Ilham Agustian bawah sadar manusia",
            role: "Desainer",
            message: "Untuk desain anda masih dalam progress peng...",
            date: "11/05",
            read: 0
        },
        {
            id: 6,
            name: "Ilham Agustian bawah sadar manusia",
            role: "Desainer",
            message: "Untuk desain anda masih dalam progress peng...",
            date: "11/05",
            read: 0
        },
        {
            id: 7,
            name: "Ilham Agustian bawah sadar manusia",
            role: "Desainer",
            message: "Untuk desain anda masih dalam progress peng...",
            date: "11/05",
            read: 0
        },
        {
            id: 8,
            name: "Ilham Agustian bawah sadar manusia",
            role: "Desainer",
            message: "Untuk desain anda masih dalam progress peng...",
            date: "11/05",
            read: 0
        },
        {
            id: 9,
            name: "Ilham Agustian bawah sadar manusia",
            role: "Desainer",
            message: "Untuk desain anda masih dalam progress peng...",
            date: "11/05",
            read: 0
        },
    ]
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
                <section className="userMessage-message" >
                </section>
            </section>
        </main>
    )
}

export default UserMessage