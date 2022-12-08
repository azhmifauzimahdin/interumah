import React, { useEffect, useState } from "react"
import { IlustrationDiscusion } from "../../../assets"
import { imgCategory1 } from "../../../assets/dummy"
import "./PosterCategory.css"

interface PosterCategoryProps<T = any> {
    data: T[]
}
const PosterCateogory: React.FC<PosterCategoryProps> = props => {
    const [designData, setDesignData] = useState<any[]>([])

    const initiateDesign = (data: any[]) => {
        setDesignData(data)
    }
    useEffect(() => {
        if (props.data.length === 0) return
        initiateDesign([...props.data])
    }, [props.data])
    return (
        <>
            {designData.length > 0 ? designData.map(data => {
                return (
                    <figure className="posterCategory-poster-wrapper" key={data.id}>
                        <section className="posterCategory-poster-text">
                            {data.title} memiliki peran penting untuk anda
                        </section>
                        <section className="posterCategory-poster-ilustration">
                            <img src={IlustrationDiscusion} alt="" />
                        </section>
                        <section className="posterCategory-poster-image">
                            <img src={imgCategory1} alt="category" />
                        </section>
                    </figure>
                )
            }) : null}
        </>
    )
}

export default PosterCateogory