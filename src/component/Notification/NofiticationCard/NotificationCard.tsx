import React from "react"
import Notification from "../Notification/Notification"
import "./NotificationCard.css"

interface NotificationCardProps {
    visible: boolean
    onClose: () => void
}
const NotificationCard: React.FC<NotificationCardProps> = props => {
    const { visible, onClose } = props

    //------ Notication Data ------
    const notificationData = [
        {
            id: 1,
            status: "LENGKAPI EMAIL-MU!",
            title: "Hai, Ilham3534. Ayo Update Email mu sekarang!",
            desc: "Hai, Ilham3534. Ayo Update Email mu sekarang! Hai, Ilham3534. Ayo Update Email mu sekarang! Hai, Ilham3534. Ayo Update Email mu sekarang!",
            date: "05-11-2022",
            time: "18:04",
            readStatus: true
        },
        {
            id: 2,
            status: "LENGKAPI EMAIL-MU!",
            title: "Hai, Ilham3534. Ayo Update Email mu sekarang!",
            desc: "Hai, Ilham3534. Ayo Update Email mu sekarang! Hai, Ilham3534. Ayo Update Email mu sekarang! Hai, Ilham3534. Ayo Update Email mu sekarang!",
            date: "05-11-2022",
            time: "18:04",
            readStatus: true
        },
        {
            id: 3,
            status: "LENGKAPI EMAIL-MU!",
            title: "Hai, Ilham3534. Ayo Update Email mu sekarang!",
            desc: "Hai, Ilham3534. Ayo Update Email mu sekarang! Hai, Ilham3534. Ayo Update Email mu sekarang! Hai, Ilham3534. Ayo Update Email mu sekarang!",
            date: "05-11-2022",
            time: "18:04",
            readStatus: false
        },
    ]
    if (!visible) return <></>
    return (
        <main className="notificationCard-wrapper" onClick={onClose}>
            <section className="notificationCard-container">
                <article className="notificationCard-box">
                    <section className="notificationCard-triangle" />
                    <section className="notificationCard-header">
                        Notifikasi baru diterima
                    </section>
                    <section className="notificationCard-content">
                        <Notification data={notificationData} />
                    </section>
                    <footer className="notificationCard-footer">
                        Tampilkan Semua
                    </footer>
                </article>
            </section>
        </main>
    )
}

export default NotificationCard