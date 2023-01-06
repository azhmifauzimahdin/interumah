import React, { useState } from "react"
import { LoadingScreen } from "../../../../component"
import Table, { TableColumn } from "../../../../component/Table/Table"
import "./TransferData.css"

const AdminDataTransfer: React.FC = () => {
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
            title: 'Desain',
            dataIndex: 'design'
        },
        {
            title: 'Harga',
            dataIndex: 'price',
            render: data => <span>Rp. {data.price}</span>
        },
        {
            title: 'Desainer',
            dataIndex: 'designer',
        },
        {
            title: 'Bukti',
            dataIndex: 'imageUrl',
            render: data =>
                <section className="imagetableBox">
                    <img src={`http://${data.imageUrl}`} alt={data.title} />
                </section>
        },
        {
            title: 'Konfirmasi',
            render: data => {
                return (
                    <React.Fragment>
                        <button className="admin-btn admin-btn-edit">Setuju</button>
                        <button className="admin-btn admin-btn-delete">Tolak</button>
                    </React.Fragment>
                )
            }
        }
    ]

    //------ Example Data Transfer ------
    const transferdata = [
        {
            id: 1,
            name: 'Azhmi Fauzi Mahdin',
            design: 'Ruang Keluarga',
            price: 3000000,
            designer: 'PT. Interumah',
            imageUrl: 'www.buatatm.com/wp-content/uploads/2021/03/Bukti-Transfer-BCA-Mobile.jpg'
        }
    ]
    return (
        <main className="adminDataTransfer-wrapper">
            <header className="adminDataTransfer-header">Data Transfer</header>
            <Table data={transferdata} columns={columns} hideAdd={false} />
            {loading && <LoadingScreen />}
        </main>)
}

export default AdminDataTransfer