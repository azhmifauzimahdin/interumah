import React, { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { imgProfile1 } from "../../../assets/dummy"
import { IconProfile } from "../../Icon"
import "./MessageList.css"

interface MessageListProps<T = any> {
    data: T[]
}
const MessageList: React.FC<MessageListProps> = props => {
    const [messageList, setMessageList] = useState<any[]>([])

    //------ Initiate Message List ------
    const initiateMessageList = (data: any[]) => {
        setMessageList(data)
    }

    useEffect(() => {
        if (props.data.length === 0) return
        initiateMessageList([...props.data])
    }, [props.data])

    //------ onClick box------
    const navigate = useNavigate()
    const cek = (id: number) => {
        navigate(`?iduser=${id}`)
    }

    //------- style box active -------
    const [searchParams] = useSearchParams()
    const paramiduser = searchParams.get("iduser")
    const iduser = paramiduser !== null ? parseInt(paramiduser, 10) : null
    return (
        <>
            {messageList.length > 0 ? messageList.map(data => {
                let classNames = ["messageList-box"];

                if (data.id === iduser) {
                    classNames.push("active");
                } else {

                }
                return (
                    <section key={data.id} onClick={() => cek(data.id)} className={classNames.join(" ")}>
                        <section className="messageList-box-profile">
                            <IconProfile image={imgProfile1} size="sm" />
                        </section>
                        <section className="messageList-box-content">
                            <section className="messageList-box-content-user">
                                <section className="messageList-box-content-user-name">{data.name !== null ? data.name : "Username"}</section>
                                <section className="messageList-box-content-user-role">desainer</section>
                            </section>
                            <section className="messageList-box-content-viewMessage">
                                Untuk desain anda masih dalam progress pengerjaan
                            </section>
                        </section>
                        <section className="messageList-box-addition">
                            10/05
                            {data.read > 0 ?
                                (<section className="messageList-box-addition-num">{data.read}</section>) : null
                            }
                        </section>
                    </section>
                )
            }) : null}
        </>
    )
}

export default MessageList