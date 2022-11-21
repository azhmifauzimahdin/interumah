import { useEffect, useState } from "react"
import "./ImageSlide.css"

interface ImageSlideProps {
    data: string[]
}
const ImageSlide: React.FC<ImageSlideProps> = props => {
    const [images, setImages] = useState<string[]>([])
    const [index, setIndex] = useState(0)

    const initiateImage = (data: any[]) => {
        setImages(data)
    }

    useEffect(() => {
        if (props.data.length === 0) return
        initiateImage([...props.data])
        setIndex(0)
    }, [props.data])

    const slide = (n: number) => {
        setIndex(n)
    }

    const next = () => {
        if (index === images.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const prev = () => {
        for (let i = 0; i < images.length; i++) {

        }
        if (index === 0) {
            setIndex(images.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <article className="slideshow">
            <img src={images[index]} alt="promosi" className="mainImg" />
            <section className="actionsOne">
                {images.length > 0 ? images.map((images, index) => {
                    return (<div key={index} onClick={() => slide(index)} className="dotSlide"></div>)
                }) : null}
            </section>
            <section className="actionsTwo">
                <div className="nextPrev" onClick={prev}>&#10094;</div>
                <div className="nextPrev" onClick={next}>&#10095;</div>
            </section>
        </article>
    )

}

export default ImageSlide;