import React, { useState } from "react"
import { IconStart } from "../Icon";
import "./StarRating.css"

const StarRating: React.FC = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <>
            <section className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            key={index}
                            className={index <= (hover || rating) ? "rating on" : "rating off"}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <IconStart size="lg" className="star" />
                        </button>
                    )
                })}
            </section>
            <section className="star-desc">
                {rating === 5 && <section className="star-value">Amazing</section>}
                {rating === 4 && <section className="star-value">Very Good</section>}
                {rating === 3 && <section className="star-value">Good</section>}
                {rating === 2 && <section className="star-value">Dissapoint</section>}
                {rating === 1 && <section className="star-value">Bad</section>}
                {rating === 0 && <section className="star-value">------------------------</section>}
            </section>
        </>
    )
}

export default StarRating