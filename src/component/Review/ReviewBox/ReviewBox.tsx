import React from "react"
import { imgProfile1 } from "../../../assets/dummy"
import { IconStart } from "../../Icon"
import ReviewCard from "../ReviewCard/ReviewCard"
import "./ReviewBox.css"

const ReviewBox: React.FC = () => {
    //------ Data Review ------
    const dataReview = [
        {
            image: imgProfile1,
            name: "User351",
            date: "22/05/2022",
            review: "Desain sangat sesuai dengan gambar, hasilnya memuaskan, meskipun agak sedikit mahal tapi hasil tidak menghianati."
        },
        {
            image: imgProfile1,
            name: "User351",
            date: "22/05/2022",
            review: "Desain sangat sesuai dengan gambar, hasilnya memuaskan, meskipun agak sedikit mahal tapi hasil tidak menghianati."
        },
    ]
    return (
        <article className="reviewBox-box">
            <header className="reviewBox-box-header">Ulasan Customer</header>
            <section className="reviewBox-box-btnreview">
                <section className="reviewBox-box-review">
                    <section className="text-review">4.9 (5 Ulasan) </section>
                    <IconStart size="lg" />
                    <IconStart size="lg" />
                    <IconStart size="lg" />
                    <IconStart size="lg" />
                    <IconStart size="lg" />
                </section>
                <section className="reviewBox-box-btn">
                    <button className="btn-review">Semua</button>
                    <button className="btn-review">Bintang 5 (2)</button>
                    <button className="btn-review">Bintang 4 (2)</button>
                    <button className="btn-review">Bintang 3 (1)</button>
                    <button className="btn-review">Bintang 2 (0)</button>
                    <button className="btn-review">Bintang 1 (0)</button>
                </section>
            </section>
            <ReviewCard data={dataReview} />
        </article>
    )
}

export default ReviewBox