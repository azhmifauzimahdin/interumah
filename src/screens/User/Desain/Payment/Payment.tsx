import React from "react"
import { imgClassic1, imgProfile1 } from "../../../../assets/dummy"
import { Button } from "../../../../component"
import { IconCloudUpload, IconProfile } from "../../../../component/Icon"
import "./Payment.css"

const UserPayment: React.FC = () => {
    return (
        <main className="userPayment-container">
            <article className="userPayment-wrapper">
                <article className="userPayment-boxOne">
                    <header className="userPayment-header">Detail Pesanan</header>
                    <section className="userPayment-content">
                        <section className="detail-header">
                            <section className="detail-company">
                                <IconProfile size="xs" image={imgProfile1} /><span className="text">Sejahter Jaya Gr.</span>
                            </section>
                            <section className="detail-show">
                                Lihat Detail
                            </section>
                        </section>
                        <section className="detail-content">
                            <figure className="detail-image">
                                <img src={imgClassic1} alt="desain" />
                            </figure>
                            <section className="detail-desc">
                                Kamar Tidur Modern Estetik
                                <section className="detail-desc-size">Ukuran 3 x 9 meter</section>
                            </section>
                        </section>
                        <section className="detail-footer">
                            Total Harga:<span className="detail-footer-price"> Rp.10.000.000</span>
                        </section>
                    </section>
                </article>
                <article className="userPayment-boxTwo">
                    <header className="userPayment-header">Ringkasan Pesanan</header>
                    <section className="userPayment-content">
                        <section className="summary-header">
                            Kamar Tidur Modern Estetik
                        </section>
                        <section className="summary-content">
                            <section className="summary-content-key">
                                Harga <br />Ukuran <br />Pembayaran
                            </section>
                            <section className="summary-content-value">
                                10.000.000 <br />3 x 9 Meter <br />Bank BNI
                            </section>
                            <section className="summary-content-key">
                                Bukti Transfer
                            </section>
                            <section className="summary-content-valueSucces">
                                Sudah
                            </section>
                        </section>
                    </section>
                    <section className="userPayment-button">
                        <Button disabled>Lakukan Pembayaran</Button>
                    </section>
                </article>
                <article className="userPayment-boxOne">
                    <header className="userPayment-header">Metode Pembayaran</header>
                </article>
                <article className="userPayment-boxOne">
                    <header className="userPayment-header">Bukti Transfer</header>
                    <section className="userPayment-desc" >
                        Setelah melakukan transfer, Silahkan unggah bukti transfer untuk melanjutkan proses pembayaran
                    </section>
                    <section className="userPayment-buttonUpload">
                        <Button size="sm"><IconCloudUpload className="icon-cloudUpload" />Unggah Bukti Transfer</Button>
                    </section>
                </article>
            </article>
        </main>
    )
}

export default UserPayment