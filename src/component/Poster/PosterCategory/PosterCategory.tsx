import React from "react"
import { IlustrationDiscusion } from "../../../assets"
import { imgCategory1 } from "../../../assets/dummy"
import "./PosterCategory.css"

const PosterCateogory: React.FC = () => {
    return (
        <figure className="posterCategory-poster-wrapper">
            <section className="posterCategory-poster-text">
                Kamar Tidur memiliki peran penting untuk anda
            </section>
            <section className="posterCategory-poster-ilustration">
                <img src={IlustrationDiscusion} alt="" />
            </section>
            <section className="posterCategory-poster-image">
                <img src={imgCategory1} alt="category" />
            </section>
        </figure>
    )
}

export default PosterCateogory