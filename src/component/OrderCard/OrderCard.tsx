import React from "react"
import { imgClassic1, imgProfile1 } from "../../assets/dummy"
import Button from "../Button/Button"
import { IconProfile } from "../Icon"
import ProgressBar from "../ProgressBar/ProgressBar"
import "./OrderCard.css"

interface OrderCardProps<T = any> {
    data?: T[]
}
const OrderCard: React.FC<OrderCardProps> = props => {
    return (
        <section className="orderCard-box">
            <section className="orderCard-header">
                <section className="orderCard-company">
                    <IconProfile size="xs" image={imgProfile1} /><span className="text">Sejahter Jaya Gr.</span>
                </section>
                <section className="orderCard-status success-state">
                    Selesai
                </section>
            </section>
            <section className="orderCard-content">
                <figure className="orderCard-image">
                    <img src={imgClassic1} alt="desain" />
                </figure>
                <section className="orderCard-desc">
                    Kamar Tidur Modern Estetik
                    <section className="orderCard-desc-size">Ukuran 3 x 9 meter</section>
                </section>
            </section>
            <section className="orderCard-price">
                Total Harga:<span className="orderCard-price-text"> Rp.10.000.000</span>
            </section>
            <section className="orderCard-add">
                <section className="orderCard-add-text">
                    Berikan penilaian untuk desain yang telah anda pesan. Ini akan membantu desainer untuk berkembang.
                </section>
                <section className="orderCard-add-btn">
                    <Button>Beri Penilaian</Button>
                </section>
            </section>
            <section className="orderCard-add">
                <section className="orderCard-add-text">
                    Segera lakukan pembayaran, pesanan akan otomatis hilang jika melebihi 2 hari setelah pemesanan
                </section>
                <section className="orderCard-add-btn">
                    <Button>Lakukan Pembayaran</Button>
                </section>
            </section>
            <section className="orderCard-progress">
                <ProgressBar bgColor="#101B94" progress='70' height={40} />
            </section>
        </section>
    )
}

export default OrderCard