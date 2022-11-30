import React, { useEffect, useState } from "react"
import { imgClassic1, imgClassic2, imgClassic3 } from "../../../assets/dummy"
import { IconProfile, IconStart } from "../../Icon"
import "./ReviewCard.css"

interface ReviewCardProps<T = any> {
    data: T[]
}
const ReviewCard: React.FC<ReviewCardProps> = props => {
    const [reviewData, setReviewData] = useState<any[]>([])

    const initiateReview = (data: any[]) => {
        setReviewData(data)
    }

    useEffect(() => {
        if (props.data.length === 0) return
        initiateReview([...props.data])
    }, [props.data])

    return (
        <>
            {reviewData.length > 0 ? reviewData.map(data => {
                return (
                    <article className="reviewCard-wrapper">
                        <section className="reviewCard-profile">
                            <IconProfile image={data.image} size="sm" />
                            <span className="username">{data.name}</span>
                        </section>
                        <section className="reviewCard-start">
                            <IconStart size="lg" /><IconStart size="lg" /><IconStart size="lg" /><IconStart size="lg" /><IconStart size="lg" />
                            <span className="date">{data.date}</span>
                        </section>
                        <section className="reviewCard-review">
                            {data.review}
                        </section>
                        <section className="reviewCard-wrapperImg">
                            <section className="reviewCard-boxImg">
                                <img src={imgClassic1} alt="review" />
                            </section>
                            <section className="reviewCard-boxImg">
                                <img src={imgClassic2} alt="review" />
                            </section>
                            <section className="reviewCard-boxImg">
                                <section className="other-box">
                                    Laninnya 5+
                                </section>
                                <img src={imgClassic3} alt="review" />
                            </section>
                        </section>
                    </article>
                )
            }) : null}
        </>
    )
}
export default ReviewCard