import React from "react"
import Table, { TableColumn } from "../../../../component/Table/Table"
import "./AdminData.css"

const AdminDataAdmin: React.FC = () => {
    const data = [
        {
            IDAdmin: "IT32423",
            Nama: "Agus Mulyo",
            Email: "agus@mail.com",
            address: 'Balikpapan',
            phone: '087837223742',
        },
    ]
    const columns: TableColumn[] = [
        {
            title: 'ID Admin',
            dataIndex: 'IDAdmin',
        },
        {
            title: 'Nama',
            dataIndex: 'Nama',
        },
        {
            title: 'Email',
            dataIndex: 'Email',
        },
        {
            title: 'Role',
            render: data => <span>Admin</span>
        },
        {
            title: 'Alamat',
            dataIndex: 'address'
        },
        {
            title: 'No. Telp',
            dataIndex: 'phone'
        },
        {
            title: 'Aksi',
            render: data => {
                return (
                    <React.Fragment>
                        <button className="admin-btn admin-btn-edit">Edit</button>
                        <button className="admin-btn admin-btn-delete">Hapus</button>
                    </React.Fragment>
                )
            }
        }
    ]

    return (
        <main className="adminData">
            <header className="adminData-title">Data Admin</header>
            <Table data={data} columns={columns} />
        </main>
    )
}

export default AdminDataAdmin