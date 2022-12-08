import React from "react"
import Table, { TableColumn } from "../../../../component/Table/Table"
import "./AdminData.css"

const AdminDataAdmin: React.FC = () => {
    const data = [
        {
            IDAdmin: "IT32423",
            Nama: "Agus Mulyo",
            Email: "agus@mail.com"
        },
        {
            IDAdmin: "IT32423",
            Nama: "Agus Mulyo",
            Email: "agus@mail.com"
        },
        {
            IDAdmin: "IT32423",
            Nama: "Agus Mulyo",
            Email: "agus@mail.com"
        },
        {
            IDAdmin: "IT32423",
            Nama: "Agus Mulyo",
            Email: "agus@mail.com"
        },
        {
            IDAdmin: "IT32423",
            Nama: "Agus Mulyo",
            Email: "agus@mail.com"
        },
        {
            IDAdmin: "IT32423",
            Nama: "Agus Mulyo",
            Email: "agus@mail.com"
        },
        {
            IDAdmin: "IT32423",
            Nama: "Agus Mulyo",
            Email: "agus@mail.com"
        },
        {
            IDAdmin: "IT32423",
            Nama: "Agus Mulyo",
            Email: "agus@mail.com"
        },
        {
            IDAdmin: "IT32423",
            Nama: "Agus Mulyo",
            Email: "agus@mail.com"
        },
        {
            IDAdmin: "IT32423",
            Nama: "Agus Mulyo",
            Email: "agus@mail.com"
        },
        {
            IDAdmin: "IT32423",
            Nama: "Agus Mulyo",
            Email: "agus@mail.com"
        },
        {
            IDAdmin: "IT32423",
            Nama: "Agus Mulyo",
            Email: "agus@mail.com"
        },
        {
            IDAdmin: "IT32423",
            Nama: "Agus Mulyo",
            Email: "agus@mail.com"
        },
        {
            IDAdmin: "IT32423",
            Nama: "Agus Mulyo",
            Email: "agus@mail.com"
        },
        {
            IDAdmin: "IT32423",
            Nama: "Agus Mulyo",
            Email: "agus@mail.com"
        },
        {
            IDAdmin: "IT32423",
            Nama: "Agus Mulyo",
            Email: "agus@mail.com"
        },
        {
            IDAdmin: "IT32423",
            Nama: "Agus Mulyo",
            Email: "agus@mail.com"
        },
        {
            IDAdmin: "IT32423",
            Nama: "Indra Kurniawan",
            Email: "indra@mai.com"
        }
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
    ]

    return (
        <main className="adminData">
            <header className="adminData-title">Data Admin</header>
            <Table data={data} columns={columns} />
        </main>
    )
}

export default AdminDataAdmin