import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./MessageMenu.css"

interface MessageMenuProps<T = any> {
    visible: boolean
    data: T[]
    onClick?: (key: any) => void
    onClose: () => void
}

const MessageMenu: React.FC<MessageMenuProps> = props => {
    const navigate = useNavigate()
    const { visible, onClose } = props
    const [menuMessage, setMessageMenu] = useState<string[]>([])

    const initiateMessageMenu = (data: string[]) => {
        setMessageMenu(data)
    }

    useEffect(() => {
        if (props.data.length === 0) return
        initiateMessageMenu([...props.data])
    }, [props.data])

    const linkMessageMenu = (data: string) => {
        const newData = data.replace(/ /g, '').toLowerCase()
        navigate(`/${newData}`)
    }

    if (!visible) return <></>

    return (
        <main className="messageMenu-main" onClick={onClose}>
            <section className="messageMenu-content">
                {menuMessage.length > 0 ? menuMessage.map((data, index) => {
                    return (
                        <section className="messageMenu-listMenu" key={index} onClick={() => linkMessageMenu(data)}>{data}</section>
                    )
                }) : null}
            </section>
        </main>
    )
}

export default MessageMenu