import React, { useEffect, useState } from "react"
import Button from "../Button/Button"
import { IconFavoriteBorder, IconLocation, IconPrice } from "../Icon"
import "./ProductCard.css"

interface ProductCardProps<T = any> {
    data: T[]
}

const ProductCard: React.FC<ProductCardProps> = props => {
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
                    <article className="productCard" key={data.id}>
                        <figure className="productCard-imgProduct">
                            <img src={`http://${data.imageUrl}`} alt="Classic" />
                        </figure>
                        <article className="productCard-article">
                            <header className="productCard-title">{data.title}</header>
                            <section className="productCard-company">PT. Media Kreasi Abadi</section>
                            <section className="productCard-address">
                                <span className="icon"><IconLocation /></span>Balikpapan, Indonesia
                            </section>
                            <section className="productCard-price">
                                <span className="icon"><IconPrice /></span>Rp. 10.000.000
                            </section>
                            <section className="productCard-optionProduct">
                                <section className="btnFavorit"><IconFavoriteBorder /></section>
                                <section className="btnDetail"><Button fontWeight="normal" size="sm" fontSize="sm">Lihat detail</Button></section>
                            </section>
                        </article>
                    </article>
                )
            }) : null
            }
        </>
    )
}

export default ProductCard