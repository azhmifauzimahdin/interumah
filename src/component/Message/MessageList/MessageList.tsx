import React, { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
// import { imgProfile1 } from "../../../assets/dummy"
// import { userService } from "../../../services"
import { User } from "../../../types/User"
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

    //------ Get Designer ------
    const [dataDesigner] = useState<User>()
    // const getDesigner = async (id: number) => {
    //     const response = await userService.getUserByID(id)
    //     setDataDesigner(response.data.data)
    // }

    //------ onClick box------
    const navigate = useNavigate()
    const handleDetailMessage = (id: number) => {
        navigate(`?idDesainer=${id}`)
    }

    //------- style box active -------
    const [searchParams] = useSearchParams()
    const paramiduser = searchParams.get("idDesainer")
    const iduser = paramiduser !== null ? parseInt(paramiduser, 10) : null
    return (
        <>
            {messageList.length > 0 ? messageList.map(data => {
                let classNames = ["messageList-box"];

                if (data.sender_id === iduser) {
                    classNames.push("active");
                } else {

                }

                // getDesigner(data.sender_id)

                return (
                    <section key={data.id} onClick={() => handleDetailMessage(data.sender_id)} className={classNames.join(" ")}>
                        <section className="messageList-box-profile">
                            <IconProfile image={`http://${dataDesigner?.imageUrl as any}`} size="sm" />
                        </section>
                        <section className="messageList-box-content">
                            <section className="messageList-box-content-user">
                                <section className="messageList-box-content-user-name">{dataDesigner?.name !== null ? dataDesigner?.name : "Username"}</section>
                                <section className="messageList-box-content-user-role">desainer</section>
                            </section>
                            <section className="messageList-box-content-viewMessage">
                                {data.contents}

                            </section>
                        </section>
                        <section className="messageList-box-addition">
                            {new Date(data.created_at).getDate()}/
                            {new Date(data.created_at).getMonth()}
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