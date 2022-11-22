import React from "react";
import { IlustrationCalculator, IlustrationLogin, ImageOne } from "../../../assets";
import { imgClassic1 } from "../../../assets/dummy";
import Button from "../../Button/Button";
import "./NewEstimate.css";

interface NewEstimateProps {
    onStart: () => void
}
const NewEstimate: React.FC<NewEstimateProps> = props => {
    const { onStart } = props
    return (
        <>
            <article className="newEstimate-box">
                <section className="newEstimate-box-ilustration">
                    <img src={IlustrationCalculator} alt="Ilustration" className="imageIlustration" />
                </section>
                <section className="newEstimate-box-content">
                    Selamat datang di Hitung Estimasi <br />
                    Silahkan ikuti beberapa langkah nantinya
                    untuk mengetahui estimasi desain Rumah Anda
                </section>
                <section className="newEstimate-box-button">
                    <Button type="estimate" onClick={onStart}>Hitung Sekarang</Button>
                </section>
            </article>
        </>
    )
}

export default NewEstimate