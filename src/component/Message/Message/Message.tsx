import React, { useEffect, useState } from "react"
import "./Message.css"

interface MessageProps<T = any> {
    data: T[]
    desainer: T
}
const Message: React.FC<MessageProps> = props => {
    const [dataMessage, setDataMessage] = useState<any[]>([])
    const [dataDesigner, setDesigner] = useState<any>()

    const initiateDataMessage = (data: any[]) => {
        setDataMessage(data)
    }
    const initiateDataDesigner = (data: any[]) => {
        setDesigner(data)
    }

    useEffect(() => {
        if (props.data.length === 0) return
        initiateDataMessage([...props.data])
        if (props.data.length === 0) return
        initiateDataDesigner(props.desainer)
    }, [props.data, props.desainer])

    return (
        <>
            {dataMessage.length > 0 ? dataMessage.map(data => {
                return (
                    <section className={dataDesigner.id === data.receiver_id ? 'message-content message-content-designer' : 'message-content message-content-user'} key={data.id}>{data.contents}<section className="time">{new Date(data.created_at).getHours()}.{new Date(data.created_at).getMinutes()}</section></section>
                )
            }) : null}
        </>
    )
}
export default Message