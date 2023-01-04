import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { ImageBackgoundEstimate } from "../../../assets"
import { imgProfile1 } from "../../../assets/dummy"
import { Button, Input, LoadingScreen, Message, MessageList, MessageMenu } from "../../../component"
import { IconPointThree, IconProfile, IconRoundPlus, IconSearch, IconSendMessage } from "../../../component/Icon"
import { EmoteSmile } from "../../../component/Icon/Emote"
import { MessageService } from "../../../services"
import { Chat, ChatPartner, DataMessage } from "../../../types/Message"
import "./Message.css"

const UserMessage: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false)

    //------- Get All Chats with the Last Message ------
    const [listMessage, setListMessage] = useState<DataMessage[]>([])
    useEffect(() => {
        setLoading(true)
        MessageService.getAllChatsLastMessage()
            .then(response => {
                setListMessage(response.data.data)
                setLoading(false)
            })
            .catch(error => {
                console.log("error", error)
                setLoading(false)
            })
    }, [])

    //------- Get All Chats With Designer -------
    const [message, setMessage] = useState<Chat[]>([])
    const [chatPartner, setChatPartner] = useState<ChatPartner>()
    const [searchParams] = useSearchParams()
    const paramIdDesigner = parseInt(searchParams.get("idDesainer") as any)

    useEffect(() => {
        setLoading(true)
        if (paramIdDesigner) {
            MessageService.getAllChatsWithDesigner(paramIdDesigner)
                .then(response => {
                    setMessage(response.data.data.chats)
                    setChatPartner(response.data.data.chatPartner)
                    setLoading(false)
                })
                .catch(error => {
                    console.log("error", error)
                    setLoading(false)
                })
        }
    }, [paramIdDesigner])

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
    }

    return (
        <main className="userMessage-container">
            <section className="userMessage-boxMessage">
                <section className="userMessage-messageList">
                    <article className="userMessage-messageList-header">
                        <header className="userMessage-messageList-header-title">Pesan</header>
                        <section className="userMessage-messageList-header-search">
                            <section className="input-group-button">
                                <Input type="text" name="keyword" inputType="search" size="sm" placeholder="Cari pesan disini..." />
                                <div className="input-group-prependbutton">
                                    <button className="btnsearchmessage"><IconSearch size="sm" /></button>
                                </div>
                            </section>
                        </section>
                    </article>
                    <article className="userMessage-messageList-content">
                        <MessageList data={listMessage} />
                    </article>
                </section>
                {message.length > 0 ?
                    <section className="userMessage-Message">
                        <article className="userMessage-header">
                            <section className="userMessage-header-userbox">
                                <section className="userMessage-header-userbox-profile"><IconProfile image={imgProfile1} /></section>
                                <section className="userMessage-header-userbox-desc">
                                    <section className="userMessage-header-userbox-desc-name">
                                        {chatPartner?.name}
                                    </section>
                                    <section className="userMessage-header-userbox-desc-view">
                                        online
                                    </section>
                                </section>
                            </section>
                            <section className="userMessage-header-menu" onClick={MenuMessageHover}>
                                <IconPointThree />
                            </section>
                        </article>
                        <article className="userMessage-content" style={{ backgroundImage: `url(${ImageBackgoundEstimate})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "8vw" }}>
                            {loading ?
                                <LoadingScreen type="content" />
                                :
                                <Message
                                    data={message}
                                    desainer={chatPartner as any} />
                            }
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
                    :
                    <section className="userMessage-blankMessage" style={{ backgroundImage: `url(${ImageBackgoundEstimate})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "8vw" }} />
                }
            </section>
        </main>
    )
}

export default UserMessage