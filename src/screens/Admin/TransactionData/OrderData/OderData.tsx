import React, { useState } from "react"
import { LoadingScreen } from "../../../../component"
import Table, { TableColumn } from "../../../../component/Table/Table"
import "./OrderData.css"

const AdminDataOrder: React.FC = () => {
    const [loading,] = useState<boolean>(false)

    //------- Column Table Product -------
    const columns: TableColumn[] = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Nama',
            dataIndex: 'name'
        },
        {
            title: 'Ukuran',
            dataIndex: 'size'
        },
        {
            title: 'Harga',
            dataIndex: 'price',
            render: data => <span>Rp. {data.price}</span>
        },
        {
            title: 'Desainer',
            dataIndex: 'designer'
        },
        {
            title: 'Status',
            dataIndex: 'status'
        },
        {
            title: 'Gambar',
            dataIndex: 'imageUrl',
            render: data =>
                <section className="imagetableBox">
                    <img src={`http://${data.imageUrl}`} alt={data.title} />
                </section>
        }
    ]

    //------ Examples Transaction Data ------
    const orderData = [
        {
            id: 1,
            name: 'Azhmi Fauzi Mahdin',
            size: '3 x 9 m',
            price: 3000000,
            designer: 'PT. Interumah',
            status: 'Selesai',
            imageUrl: 'd3p0bla3numw14.cloudfront.net/news-content/img/2021/06/07111848/Interior-Rumah-Sederhana-tapi-Menarik.jpg'
        }
    ]
    return (
        <main className="adminDataOrder-wrapper">
            <header className="adminDataOrder-header">Data Pesanan</header>
            <Table data={orderData} columns={columns} hideAdd={false} />
            {loading && <LoadingScreen />}
        </main>)
}

export default AdminDataOrder