import React, { useState } from "react"
import { LoadingScreen } from "../../../../component"
import Table, { TableColumn } from "../../../../component/Table/Table"
import "./FinancialReport.css"

const AdminFinancialReport: React.FC = () => {
    const [loading,] = useState<boolean>(false)
    //------- Column Table Product -------
    const columns: TableColumn[] = [
        {
            title: 'Tanggal',
            dataIndex: 'date',
        },
        {
            title: 'Transaksi',
            dataIndex: 'transaction'
        },
        {
            title: 'Desainer',
            dataIndex: 'designer'
        },
        {
            title: 'ID Pesanan',
            dataIndex: 'ID'
        },
        {
            title: 'Jumlah Income',
            dataIndex: 'income',
            render: data => <span>Rp. {data.income}</span>
        }
    ]

    //------ Example Report Data ------
    const reportData = [
        {
            date: '22/11/2022',
            transaction: 'Desain',
            designer: 'PT. Interumah',
            ID: 1,
            income: 200000
        }
    ]
    return (
        <main className="adminDataReport-wrapper">
            <header className="adminDataReport-header">Laporan Keuangan</header>
            <Table data={reportData} columns={columns} hideAdd={false} />
            {loading && <LoadingScreen />}
        </main>)
}

export default AdminFinancialReport