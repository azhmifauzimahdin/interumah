import React, { useEffect, useState } from "react"
import Table, { TableColumn } from "../../../../component/Table/Table"
import { AdminService } from "../../../../services"
import { Designer } from "../../../../types/Admin"
import "./DesignerData.css"

const AdminDataDesigner: React.FC = () => {
    const [designerData, setDesignerData] = useState<Designer[]>([])
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
            render: data => <span>Desainer</span>
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
        }

    ]

    useEffect(() => {
        AdminService.getAllDesigner()
            .then(response => setDesignerData(response.data.data))
            .catch(error => console.log("error", error))
    }, [])
    return (
        <main className="adminDataDesigner-wrapper">
            <header className="adminDataDesigner-header">Data Desainer</header>
            <Table data={designerData} columns={columns} hideAdd={false} />
        </main>
    )
}

export default AdminDataDesigner