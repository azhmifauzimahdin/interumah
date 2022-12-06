import React, { useEffect, useState } from "react"
import "./InfoCard.css"

interface InfoCardProps<T = any> {
    data: T[]
}

const InfoCard: React.FC<InfoCardProps> = props => {
    const [infoData, setInfoData] = useState<any[]>([])

    const initiateInfo = (data: any[]) => {
        setInfoData(data)
    }

    useEffect(() => {
        if (props.data.length === 0) return
        initiateInfo([...props.data])
    }, [props.data])

    return (
        <>
            {infoData.length > 0 ? infoData.map((data, index) => {
                return (
                    <section className="infoCard-box" key={index}>
                        <section className="infoCard-desc">
                            <section className="infoCard-amount">{data.amount}</section>
                            <section className="infoCard-label">{data.label}</section>
                        </section>
                        <section className="infoCard-icon" style={{ background: data.color }}>{data.icon}</section>
                    </section>
                )
            }) : null
            }
        </>
    )
}

export default InfoCard