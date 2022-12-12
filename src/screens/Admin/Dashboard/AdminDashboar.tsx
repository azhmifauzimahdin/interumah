import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { InfoCard } from "../../../component"
import { IconFileAltOutline, IconMoneyBag, IconPenNib, IconUserFriends } from "../../../component/Icon"
import Table, { TableColumn } from "../../../component/Table/Table"
import { AdminService } from "../../../services"
import { DataDashboard, Order } from "../../../types/Admin"
import "./AdminDashboard.css"

const AdminDashboard: React.FC = () => {
    const [dashboarData, setDashboardData] = useState<DataDashboard>()
    const [orderData, setOrderData] = useState<Order[]>([])

    useEffect(() => {
        //------ Get Dashboard Data -------
        AdminService.getDashboardData()
            .then(response => setDashboardData(response.data.data))
            .catch(error => console.log('error', error))

        //------ Get Order Data -------
        AdminService.getAllOrder()
            .then(response => setOrderData(response.data.data))
            .catch(error => console.log('error', error))
    }, [])
    console.log('orderData', orderData)

    //------- Information Card ------
    const InfoData = [
        {
            amount: dashboarData?.orders.total,
            label: "Total Pesanan",
            icon: <IconFileAltOutline />,
            color: "#FFA4A2"
        },
        {
            amount: dashboarData?.users.designerCount,
            label: "Desainer",
            icon: <IconPenNib />,
            color: "#1D86FF"
        },
        {
            amount: dashboarData?.users.total,
            label: "Pengguna Aplikasi",
            icon: <IconUserFriends />,
            color: "#EFBB6E"
        },
        {
            amount: dashboarData?.profit,
            label: "Total Keuangan",
            icon: <IconMoneyBag />,
            color: "#51E739"
        },
        {
            amount: dashboarData?.categories.total,
            label: "Total Kategori",
            icon: <IconFileAltOutline />,
            color: "#FFA4A2"
        },
        {
            amount: dashboarData?.designs.total,
            label: "Total Desain",
            icon: <IconPenNib />,
            color: "#1D86FF"
        },
    ]

    //------- Column Table Order -------
    const columns: TableColumn[] = [
        {
            title: 'ID Pesanan  ',
            dataIndex: 'id',
        },
        {
            title: 'Nama Desain',
            dataIndex: 'design',
            dataIndex1: 'title'
        },
        {
            title: 'Jenis Desain',
            dataIndex: 'category'
        },
        {
            title: 'Harga',
            dataIndex: 'design',
            dataIndex1: 'price',
            render: data => <span>Rp. {data.design.price}</span>
        },
        {
            title: 'Desainer',
            dataIndex: 'designers',
            dataIndex1: 'name'
        },
        {
            title: 'Keuntungan',
            dataIndex: 'profit',
        },
        {
            title: 'Detail Pesanan',
            render: data => <Link to='/'>detail</Link>
        }

    ]
    return (
        <main className="adminDashboard">
            <article className="adminDashboard-amountBox">
                <InfoCard data={InfoData} />
            </article>
            <header className="adminDashboard-header">Laporan Transaksi</header>
            <Table data={orderData} columns={columns} hideAdd={false} />
        </main>
    )
}

export default AdminDashboard