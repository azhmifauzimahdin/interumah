import React from "react"
import { imgClassic1, imgProfile1 } from "../../../assets/dummy"
import { Button } from "../../../component"
import { IconCloudUpload, IconProfile, IconSend, IconSendMessage, IconStart } from "../../../component/Icon"
import "./AddReview.css"

const AddReview: React.FC = () => {
    return (
        <main className="userAddReview-wrapper">
            <header className="userAddReview-header">Detail Pesanan</header>
            <section className="userAddReview-box">
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
            <section className="userAddReview-boxOne">
                <section className="userAddReview-headerbox">
                    <section className="userAddReview-headerbox-title">Kualitas Desain</section>
                    <section className="userAddReview-headerbox-title">Kualitas Desainer</section>
                </section>
                <section className="userAddReview-content">
                    <section className="userAddReview-content-box">
                        <section className="userAddReview-content-start">
                            <IconStart size="lg" />
                            <IconStart size="lg" />
                            <IconStart size="lg" />
                            <IconStart size="lg" />
                            <IconStart size="lg" />
                        </section>
                        <section className="userAddReview-content-value">
                            Amazing
                        </section>
                        <textarea className="userAddReview-textArea" placeholder="Tambahkan deskripsi terkait penilain produk....." />
                        <Button><IconCloudUpload className="iconBtn" />Tambahkan Foto atau video</Button>
                    </section>
                    <section className="userAddReview-content-box">
                        <section className="userAddReview-content-start">
                            <IconStart size="lg" />
                            <IconStart size="lg" />
                            <IconStart size="lg" />
                            <IconStart size="lg" />
                            <IconStart size="lg" />
                        </section>
                        <section className="userAddReview-content-value">
                            Amazing
                        </section>
                        <textarea className="userAddReview-textArea" placeholder="Tambahkan deskripsi terkait penilain produk....." />
                        <Button><IconCloudUpload className="iconBtn" />Tambahkan Foto atau video</Button>
                    </section>
                </section>
                <section className="userAddReview-btn">
                    <Button type="secondary"><IconSend className="iconBtn" />KIRIM PENILAIAN</Button>
                </section>
            </section>
        </main>
    )
}

export default AddReview