import React, { useEffect, useState } from "react"
import "./Table.css"
import { IconSearch } from "../Icon"
import Button from "../Button/Button"

export interface TableColumn<T = any> {
    title: string,
    dataIndex?: keyof T,
    render?: (data: T) => void
    sort?: keyof T
}

interface TableProps<T = any> {
    columns: TableColumn[],
    data: T[],
    hideSearch?: boolean,
    hideAdd?: boolean
    textBtn?: string
}

const searching = (data: any[], seacrhText: string) => {
    const newDatas = data.map(data => JSON.stringify(data))
    const filteredDatas = newDatas.filter(data => data.includes(seacrhText))
    const normalizeDatas = filteredDatas.map(data => JSON.parse(data))

    return normalizeDatas
}

const Table: React.FC<TableProps> = props => {
    const [tableData, setTableData] = useState<any[][]>([])
    const [tableCurrentPage, setTableCurrentPage] = useState<number>(1)
    const [tablePerPage,] = useState<number>(5)
    const [tableSeacrh, setTableSearch] = useState<string>('')

    const initiateTable = (data: any[]) => {
        const baseData = data
        const result: any[][] = []
        while (baseData.length > 0) {
            result.push(baseData.splice(0, tablePerPage))
        }
        setTableData(result)
    }

    useEffect(() => {
        if (props.data.length === 0) return
        initiateTable([...props.data])
    }, [props.data])

    const search = (seacrhText: string) => {
        const result = searching(props.data, seacrhText)
        initiateTable(result)
        console.log("result", result)
    }

    const sort = (direction: "asc" | "desc" | "reset", property: any) => {
        const baseDatas = [...props.data]
        const sortedDatas = baseDatas.sort((a, b) => {
            if (direction === "asc") return a[property] > b[property] ? 1 : -1
            if (direction === "desc") return a[property] < b[property] ? 1 : -1

            return a[property] === b[property] ? 1 : -1
        })

        initiateTable(sortedDatas)
    }

    return (
        <section id="table" className="table-wrapper">
            <section className="table-header">
                {!props.hideSearch ? (
                    <section className="table-searchWrapper">
                        <section className="input-group-button">
                            <input type="text" name="keyword" className="inputSearch" placeholder="Masukan Email Anda" onChange={e => setTableSearch(e.target.value)} />
                            <div className="input-group-prependbutton">
                                <button className="btnsearch" onClick={() => search(tableSeacrh)}><IconSearch size="sm" /></button>
                            </div>
                        </section>
                    </section>
                ) : null}
                {!props.hideAdd ? (
                    <section className="table-addWrapper">
                        <Button size="sm">{props.textBtn}</Button>
                    </section>
                ) : null}
            </section>
            <table className="table" border={0} cellSpacing="0" cellPadding={12}>
                <thead>
                    <tr>
                        {props.columns.map((column, index) => {
                            return (
                                <td key={index}>
                                    {column.title}
                                    {column.sort ? (
                                        <React.Fragment>
                                            <button onClick={() => sort('asc', column.sort)}>asc</button>
                                            <button onClick={() => sort('desc', column.sort)}>desc</button>
                                            <button onClick={() => sort('reset', column.sort)}>reset</button>
                                        </React.Fragment>
                                    ) : null}
                                </td>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tableData.length > 0 ? tableData[tableCurrentPage - 1].map((d, index) => {
                        return (
                            <tr key={index} style={{ background: index % 2 === 0 ? '#D9D9D9' : '#fff' }}>
                                {props.columns.map((column, index) => {
                                    let renderedContent = column.dataIndex ? d[column.dataIndex] : null
                                    if (column.render) {
                                        renderedContent = column.render(d)
                                    }
                                    return (
                                        <td key={index}>
                                            {renderedContent}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    }) : null}
                </tbody>
            </table>
            {tableData.length > 0 ? (
                <section className="table-navigation">
                    <button onClick={() => setTableCurrentPage(1)} className="btn-pagination">First</button>
                    {tableCurrentPage > 1 ? (
                        <button onClick={() => setTableCurrentPage(tableCurrentPage - 1)} className="btn-pagination">Prev</button>
                    ) : <button onClick={() => setTableCurrentPage(1)} className="btn-pagination">Prev</button>}

                    {tableData.length > 0 ? Array(tableData.length).fill(0).map((value, index) => {
                        return <button className={tableCurrentPage === index + 1 ? "btn-pagination primary" : "btn-pagination secondary"} onClick={() => setTableCurrentPage(index + 1)} key={index}>{index + 1}</button>
                    }) : null}

                    {tableCurrentPage < tableData.length ? (
                        <button onClick={() => setTableCurrentPage(tableCurrentPage + 1)} className="btn-pagination">Next</button>
                    ) : <button onClick={() => setTableCurrentPage(tableData.length)} className="btn-pagination">Next</button>}
                    <button onClick={() => setTableCurrentPage(tableData.length)} className="btn-pagination">Last</button>
                </section>
            ) : null}
        </section>
    )
}

export default Table