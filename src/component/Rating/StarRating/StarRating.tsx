import React, { useEffect, useState } from "react"
import { IconStart } from "../../Icon";
import "./StarRating.css"

interface StarRatingProps {
    rate: (arg: number) => void
}
const StarRating: React.FC<StarRatingProps> = props => {
    const { rate } = props

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    useEffect(() => {
        rate(rating)
    }, [rate, rating])


    return (
        <>
            <section className="starRating-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            key={index}
                            className={index <= (hover || rating) ? "StarRating on" : "StarRating off"}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <IconStart size="lg" className="starRating" />
                        </button>
                    )
                })}
            </section>
            <section className="starRating-desc">
                {rating === 5 && <section className="starRating-value">Amazing</section>}
                {rating === 4 && <section className="starRating-value">Very Good</section>}
                {rating === 3 && <section className="starRating-value">Good</section>}
                {rating === 2 && <section className="starRating-value">Dissapoint</section>}
                {rating === 1 && <section className="starRating-value">Bad</section>}
                {rating === 0 && <section className="starRating-value">------------------------</section>}
            </section>
        </>
    )
}

export default StarRating