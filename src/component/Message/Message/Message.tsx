import React, { useEffect, useState } from "react"
import "./Message.css"

interface MessageProps<T = any> {
    data: T[]
}
const Message: React.FC<MessageProps> = props => {
    const [dataMessage, setDataMessage] = useState<any[]>([])

    const initiateDataMessage = (data: any[]) => {
        setDataMessage(data)
    }

    useEffect(() => {
        if (props.data.length === 0) return
        initiateDataMessage([...props.data])
    }, [props.data])

    return (
        <>
            {dataMessage.length > 0 ? dataMessage.map(data => {
                return (
                    <section className="message-content" key={data.id}>{data.contents}<section className="time">{data.created_at}</section></section>
                )
            }) : null}
        </>
    )
}
export default Message