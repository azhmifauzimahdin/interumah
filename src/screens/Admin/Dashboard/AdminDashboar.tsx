import React from "react"
import { InfoCard } from "../../../component"
import { IconFileAltOutline, IconMoneyBag, IconPenNib, IconUserFriends } from "../../../component/Icon"
import "./AdminDashboard.css"

const AdminDashboard: React.FC = () => {
    const InfoData = [
        {
            amount: 45.353,
            label: "Total Pesanan",
            icon: <IconFileAltOutline />,
            color: "#FFA4A2"
        },
        {
            amount: 50,
            label: "Desainer Pro",
            icon: <IconPenNib />,
            color: "#1D86FF"
        },
        {
            amount: 501.999,
            label: "Penggunaan Aplikasi",
            icon: <IconUserFriends />,
            color: "#EFBB6E"
        },
        {
            amount: 10000000,
            label: "Total Keuangan",
            icon: <IconMoneyBag />,
            color: "#51E739"
        },
    ]
    return (
        <main className="adminDashboard">
            <article className="adminDashboard-amountBox">
                <InfoCard data={InfoData} />
            </article>
        </main>
    )
}

export default AdminDashboard