import React, { useEffect, useState } from "react"
import "./CategoryCard.css"

interface CategoryCardProps<T = any> {
    data: T[]
}
const CategoryCard: React.FC<CategoryCardProps> = props => {
    const [categoryData, setCategoryData] = useState<any[]>([])

    const initiateCategory = (data: any[]) => {
        setCategoryData(data)
    }

    useEffect(() => {
        if (props.data.length === 0) return
        initiateCategory([...props.data])
    }, [props.data])

    return (
        <>
            {categoryData.length > 0 ? categoryData.map((data, index) => {
                return (
                    <section className="categoryCard-wrapper" key={index}>
                        <img src={data.img} alt="" />
                        <section className="categoryCard-content">
                            <section className="categoryCard-content-wrapper">
                                <section className="categoryCard-content-title">{data.title}</section>
                                <section className="categoryCard-content-company">{data.company}</section>
                            </section>
                        </section>
                    </section>
                )
            }) : null
            }
        </>
    )
}

export default CategoryCard