import React, { useEffect, useState } from "react"
import { IlustrationDiscusion } from "../../../assets"
import "./PosterCategory.css"

interface PosterCategoryProps<T = any> {
    data: T
}
const PosterCateogory: React.FC<PosterCategoryProps> = props => {
    const [categoryData, setCategoryData] = useState<any[]>([])

    const initiateCategory = (data: any) => {
        setCategoryData(data)
    }

    useEffect(() => {
        initiateCategory([props.data])
    }, [props.data])
    return (
        <>
            {categoryData.length > 0 ? categoryData.map(data => {
                return (
                    <figure className="posterCategory-poster-wrapper" key={data.id}>
                        <section className="posterCategory-poster-text">
                            {data.description}
                        </section>
                        <section className="posterCategory-poster-ilustration">
                            <img src={IlustrationDiscusion} alt="" />
                        </section>
                        <section className="posterCategory-poster-image">
                            <img src={`http://${data.background}`} alt="category" />
                        </section>
                    </figure>
                )
            }) : null}
        </>
    )
}

export default PosterCateogory