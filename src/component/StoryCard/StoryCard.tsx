import React from "react"
import "./StoryCard.css"
import { imgStory1 } from "../../assets/dummy"

interface StoryCardProps {
    img: string
    title: string
    date: string
}
const StoryCard: React.FC<StoryCardProps> = props => {
    const { img, title, date } = props
    return (
        <article className="storyCard">
            <figure className="storyCard-imgStory">
                <img src={img} alt="Story" />
            </figure>
            <header className="storyCard-title">{title}</header>
            <section className="storyCard-date">{date}</section>
        </article>
    )
}

// StoryCard.defaultProps{

// }

export default StoryCard