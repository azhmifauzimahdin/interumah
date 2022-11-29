import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IlustrationOk } from "../../../../assets"
import { imgClassic1, imgProfile1 } from "../../../../assets/dummy"
import { Button, DropDownPayment, ModalBlank } from "../../../../component"
import { IconCloudUpload, IconProfile } from "../../../../component/Icon"
import "./Payment.css"

const UserPayment: React.FC = () => {
    //------ Modal Successfull Payment-------
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState<boolean>(false)

    const toggleModal = () => {
        setShowModal(prevState => !prevState)
    }
    const onStayModal = (e: any) => {
        e.stopPropagation()
    }
    const navigatePayment = () => {
        navigate('/payment')
    }

    //------ Option Dropdown ------
    const options = [
        { value: "bni", bank: "BNI", image: "https://cdn-2.tstatic.net/bangka/foto/bank/images/logo-bni.jpg" },
        { value: "bca", bank: "BCA", image: "https://i.pinimg.com/originals/0d/a8/41/0da841a2721acd4740f5b5d7d049c0fb.png" },
        { value: "bri", bank: "BRI", image: "https://i2.wp.com/febi.uinsaid.ac.id/wp-content/uploads/2020/11/Logo-BRI-Bank-Rakyat-Indonesia-PNG-Terbaru.png?fit=1650%2C1408&ssl=1" },
    ]
    return (
        <>
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
                            <Button onClick={toggleModal}>Lakukan Pembayaran</Button>
                        </section>
                    </article>
                    <article className="userPayment-boxOne">
                        <header className="userPayment-header">Metode Pembayaran</header>
                        <section className="userPayment-desc">Silahkan lakukan pembayaran ke bank yang dipilih dengan nomer rekening dibawah ini!</section>
                        <section>
                            <DropDownPayment
                                option={options}
                                imageDefault="https://cdn-2.tstatic.net/bangka/foto/bank/images/logo-bni.jpg"
                                bankDefault="BNI"
                            />
                        </section>
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
            <ModalBlank
                visible={showModal}
                onClose={toggleModal}
                OnStay={onStayModal}
            >
                <section className="modalSuccessfullPayment-title">
                    Bukti pembayaran berhasil terkirim, menunggu pengecekan oleh Admin
                </section>
                <section className="modalSuccessfullPayment-ilustration">
                    <img src={IlustrationOk} alt="Ilustration Successfull Payment" className="imgIlustrationSuccessfullPayment" />
                </section>
                <section className="modalSuccessfullPayment-btn">
                    <Button onClick={navigatePayment}>Lihat Status Pesanan</Button>
                </section>

            </ModalBlank>
        </>
    )
}

export default UserPayment