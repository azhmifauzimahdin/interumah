import React, { useEffect, useState } from "react"
import "./ImageBox.css"

interface ImageBoxProps<T = any> {
    data: T[]
}

const ImageBox: React.FC<ImageBoxProps> = props => {
    const [imageData, setImageData] = useState<any[]>([])

    const initiateImage = (data: any[]) => {
        setImageData(data)
    }

    useEffect(() => {
        if (props.data.length === 0) return
        initiateImage([...props.data])
    }, [props.data])
    return (
        <>
            {imageData.length > 0 ? imageData.map((data, index) => {
                return (
                    <section className="imageBox">
                        <figure className="imageBox-img">
                            <img src={data.img} alt="type" />
                        </figure>
                        <section className="imageBox-title">{data.title}</section>
                    </section>
                )
            }) : null
            }
        </>
    )
}

export default ImageBox