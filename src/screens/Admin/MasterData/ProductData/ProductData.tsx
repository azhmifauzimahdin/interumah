import React, { useEffect, useState } from "react"
import Table, { TableColumn } from "../../../../component/Table/Table"
import { AdminService } from "../../../../services"
import { Design } from "../../../../types/Admin"
import "./ProductData.css"

const AdminDataProduct: React.FC = () => {
    const [designsdata, setDesignsData] = useState<Design[]>([])
    //------- Column Table Product -------
    const columns: TableColumn[] = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Nama',
            dataIndex: 'title'
        },
        {
            title: 'Deskripsi',
            dataIndex: 'description'
        },
        {
            title: 'Harga',
            dataIndex: 'price',
            render: data => <span>Rp. {data.price}</span>
        },
        {
            title: 'Desainer',
            dataIndex: 'designer',
            dataIndex1: 'name'
        },
        {
            title: 'Gambar',
            dataIndex: 'imageUrl',
            render: data =>
                <section className="imagetableBox">
                    <img src={`http://${data.imageUrl}`} alt={data.title} />
                </section>
        },

    ]

    useEffect(() => {
        AdminService.getAllDesign()
            .then(response => setDesignsData(response.data.data))
            .catch(error => console.log('error', error))

        console.log('design', designsdata)
    }, [])

    return (
        <main className="adminDataProduct-wrapper">
            <header className="adminDataProduct-header">Data Produk</header>
            <Table data={designsdata} columns={columns} hideAdd={false} />
        </main>
    )
}

export default AdminDataProduct