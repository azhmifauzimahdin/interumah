import React from "react"
import { imgClassic1, imgClassic2, imgClassic3 } from "../../../../assets/dummy"
import Button from "../../../Button/Button"
import ImageBox from "./ImageBox/ImageBox"
import "./RoomType.css"

const RoomType: React.FC = () => {
    const imageData = [
        {
            img: imgClassic1,
            title: "Ruang Kerja Modern"
        },
        {
            img: imgClassic2,
            title: "Ruang Kerja Minimalis"
        },
        {
            img: imgClassic3,
            title: "Ruang Kerja Robot robot robot"
        },
    ]
    return (
        <main className="roomType">
            <header className="roomType-title">Pilih jenis ruang kerja yang ada inginkan... </header>
            <section className="roomType-imgWrapper">
                <ImageBox data={imageData} />
            </section>
            <section className="roomType-button">
                <Button size="sm" fontSize="sm">Kirim</Button>
            </section>
        </main>
    )
}

export default RoomType