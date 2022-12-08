import React, { useEffect, useState } from "react"
import { IconLocation, IconReview, IconStart } from "../Icon"
import "./DesignerCard.css"

interface DesignerCardProps<T = any> {
    data: T[]
}

const DesignerCard: React.FC<DesignerCardProps> = props => {
    const [dataDesainer, setDataDesainer] = useState<any[]>([])

    const initiateDesign = (data: any[]) => {
        setDataDesainer(data)
    }

    useEffect(() => {
        if (props.data?.length === 0) return
        initiateDesign([...props.data])
    }, [props.data])

    return (
        <>
            {dataDesainer.length > 0 ? dataDesainer.map(data => {
                return (
                    <article className="desainerCard-box" key={data.id}>
                        <article className="desainerCard-box-article">
                            <header className="desainerCard-box-article-company">{data.name === null ? "Designer Name" : data.name}</header>
                            <section className="desainerCard-box-article-description">
                                <section className="desainerCard-box-article-description-card">5 Proyek</section>
                                <section className="desainerCard-box-article-description-card">3 Terjual</section>
                            </section>
                            <section className="desainerCard-box-article-address">
                                <span className="desainerCard-box-article-address-icon"><IconLocation color="white" /></span>Jl. Praja Muda II, Balikpapan
                            </section>
                            <section className="desainerCard-box-article-rating">
                                <span className="desainerCard-box-article-rating-icon"><IconReview /></span>
                                4.0
                                <span className="desainerCard-box-article-rating-iconStart">
                                    <IconStart />
                                    <IconStart />
                                    <IconStart />
                                    <IconStart />
                                </span>
                            </section>
                        </article>
                        <figure className="desainerCard-imgDesainer">
                            <img src={`http://${data.imageUrl}`} alt="Profile Designer" />
                        </figure>
                    </article>
                )
            }) : null
            }
        </>
    )
}

export default DesignerCard