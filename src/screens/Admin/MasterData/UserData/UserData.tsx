import React, { useState } from "react"
import { LoadingScreen } from "../../../../component"
import Table, { TableColumn } from "../../../../component/Table/Table"
import "./UserData.css"

const AdminDataUser: React.FC = () => {
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
            title: 'Email',
            dataIndex: 'email'
        },
        {
            title: 'Role',
            render: data => <span>User</span>
        },
        {
            title: 'Alamat',
            dataIndex: 'address',
        },
        {
            title: 'No. Telp',
            dataIndex: 'phone',
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
        },

    ]

    //------ Example User Data ------
    const dataUser = [
        {
            id: 1,
            name: "Azhmi Fauzi Mahdin",
            email: "azhmifauzi632@gmail.com",
            address: "Kebumen",
            phone: "085273913723"
        }
    ]
    return (
        <main className="adminDataUser-wrapper">
            <header className="adminDataUser-header">Data User</header>
            <Table data={dataUser} columns={columns} hideAdd={false} />
            {loading && <LoadingScreen />}
        </main>)
}

export default AdminDataUser