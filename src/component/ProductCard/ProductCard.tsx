import React from "react"
import Button from "../Button/Button"
import { IconFavorite, IconLocation, IconPrice } from "../Icon"
import "./ProductCard.css"

interface ProductCardProps {
    img: string
    title: string
    company: string
    address: string
    price: string
}
const ProductCard: React.FC<ProductCardProps> = props => {
    const { img, title, company, address, price } = props
    return (
        <article className="productCard">
            <figure className="productCard-imgProduct">
                <img src={img} alt="Classic" />
            </figure>
            <article className="productCard-article">
                <header className="productCard-title">{title}</header>
                <section className="productCard-company">{company}</section>
                <section className="productCard-address">
                    <span className="icon"><IconLocation /></span>{address}
                </section>
                <section className="productCard-price">
                    <span className="icon"><IconPrice /></span>Rp. {price}
                </section>
                <section className="productCard-optionProduct">
                    <section className="btnFavorit"><IconFavorite /></section>
                    <section className="btnDetail"><Button fontWeight="normal" size="sm" fontSize="sm">Lihat detail</Button></section>
                </section>
            </article>
        </article>
    )
}

export default ProductCard