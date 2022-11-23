import React, { useEffect, useState } from "react"
import "./Estimate.css"


interface EstimatePrpos<T = any> {
    data: T[]
}
const Estimate: React.FC<EstimatePrpos> = props => {
    const [dataEstimate, setDataEstimate] = useState<any[]>([])

    const initiateDataEstimate = (data: any[]) => {
        setDataEstimate(data)
    }

    useEffect(() => {
        if (props.data.length === 0) return
        initiateDataEstimate([...props.data])
    }, [props.data])
    return (
        <main className="estimate-wrapper">
            <article className="estimate-box">
                {dataEstimate.length > 0 ? dataEstimate.map(data => {
                    return (
                        <section className="estimate-content">{data.message}<section className="time">{data.time}</section></section>
                    )
                }) : null}
            </article>
        </main>
    )
}
export default Estimate