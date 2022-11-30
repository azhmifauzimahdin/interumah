import React, { useEffect, useState } from "react"
import { IconClockOutline } from "../../Icon"
import "./Notification.css"

interface NotificationProps<T = any> {
    data: T[]
}
const Notification: React.FC<NotificationProps> = props => {
    const [notificationData, setNotificationData] = useState<any[]>([])

    //------ Initiate Message List ------
    const initiateNotificationData = (data: any[]) => {
        setNotificationData(data)
    }

    useEffect(() => {
        if (props.data.length === 0) return
        initiateNotificationData([...props.data])
    }, [props.data])

    return (
        <>
            {notificationData.length > 0 ? notificationData.map(data => {
                return (
                    <main className={`notification-box ${data.readStatus && "active"}`} key={data.id}>
                        <figure className="notification-boxImage">
                            {data.status}
                        </figure>
                        <section className="notification-desc">
                            <section className="notification-desc-title">
                                {data.title}
                            </section>
                            <section className="notification-desc-content">
                                {data.desc}
                            </section>
                            <section className="notification-desc-date">
                                <IconClockOutline className="iconClock" /> {data.date} {data.time}
                            </section>
                        </section>
                    </main>
                )
            }) : null}
        </>
    )
}

export default Notification