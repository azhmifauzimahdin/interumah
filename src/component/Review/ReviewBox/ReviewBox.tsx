import React from "react"
import Rating from "../../Rating/Rating/Rating"
import ReviewCard from "../ReviewCard/ReviewCard"
import "./ReviewBox.css"
interface ReviewBoxProps<T = any> {
    rating: string
    amount: number
    review: T[]
}
const ReviewBox: React.FC<ReviewBoxProps> = props => {
    const { rating, amount, review } = props

    return (
        <article className="reviewBox-box">
            <header className="reviewBox-box-header">Ulasan Customer</header>
            <section className="reviewBox-box-btnreview">
                <section className="reviewBox-box-review">
                    <section className="text-review">{rating} ({amount} Ulasan) </section>
                    <Rating rating={parseInt(rating)} />
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
            <ReviewCard data={review} />
        </article>
    )
}

export default ReviewBox