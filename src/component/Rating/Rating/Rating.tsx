import React from "react"
import { IconStart } from "../../Icon";
import "./Rating.css"

interface RatingProps {
    rating: number
}
const Rating: React.FC<RatingProps> = props => {
    const { rating } = props

    return (
        <>
            <section className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            key={index}
                            className={index <= rating ? "rating on" : "rating off"}
                        >
                            <IconStart size="lg" className="star" />
                        </button>
                    )
                })}
            </section>
        </>
    )
}

export default Rating