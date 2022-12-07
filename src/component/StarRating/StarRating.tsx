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
                {rating === 5 ? <section className="star-value">Amazing</section> : <section>---------</section>}
            </section>
        </>
    )
}

export default StarRating