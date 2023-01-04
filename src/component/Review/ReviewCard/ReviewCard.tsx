import React from "react"
import { IconProfile } from "../../Icon"
import Rating from "../../Rating/Rating/Rating"
import "./ReviewCard.css"

interface ReviewCardProps<T = any> {
    data: T[]
}
const ReviewCard: React.FC<ReviewCardProps> = props => {
    const { data } = props
    return (
        <>
            {data && data.length > 0 ? data.map(data => {
                return (
                    <article className="reviewCard-wrapper" key={data.id}>
                        <section className="reviewCard-profile">
                            <IconProfile image={`http://${data.reviewer.imageUrl}`} size="sm" />
                            <span className="username">{data.reviewer.name}</span>
                        </section>
                        <section className="reviewCard-start">
                            <Rating rating={data.designRating} />
                            <span className="date">dd/mm/yyyy</span>
                        </section>
                        <section className="reviewCard-review">
                            {data.designComments && (`${data.designComments}. ${data.designerComments}`)}
                        </section>
                    </article>
                )
            }) : null}
        </>
    )
}
export default ReviewCard