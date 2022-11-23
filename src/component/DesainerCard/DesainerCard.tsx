import React, { useEffect, useState } from "react"
import { imgDesainer1 } from "../../assets/dummy"
import { IconLocation, IconReview, IconStart } from "../Icon"
import "./DesainerCard.css"

interface DesainerCardProps<T = any> {
    data: T[]
}

const DesainerCard: React.FC<DesainerCardProps> = props => {
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
                            <header className="desainerCard-box-article-company">{data.nama}</header>
                            <section className="desainerCard-box-article-description">
                                <section className="desainerCard-box-article-description-card">{data.proyek} Proyek</section>
                                <section className="desainerCard-box-article-description-card">{data.terjual} Terjual</section>
                            </section>
                            <section className="desainerCard-box-article-address">
                                <span className="desainerCard-box-article-address-icon"><IconLocation color="white" /></span>{data.alamat}
                            </section>
                            <section className="desainerCard-box-article-rating">
                                <span className="desainerCard-box-article-rating-icon"><IconReview /></span>
                                {data.rating}
                                <span className="desainerCard-box-article-rating-iconStart">
                                    <IconStart />
                                    <IconStart />
                                    <IconStart />
                                    <IconStart />
                                </span>
                            </section>
                        </article>
                        <figure className="desainerCard-imgDesainer">
                            <img src={imgDesainer1} alt="desainer" />
                            {/* <img src={`http://${data.imageUrl}`} alt="Classic" /> */}
                        </figure>
                    </article>
                )
            }) : null
            }
        </>
    )
}

export default DesainerCard