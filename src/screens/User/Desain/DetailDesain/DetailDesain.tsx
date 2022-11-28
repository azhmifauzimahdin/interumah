import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IlustrationAtmMachine } from "../../../../assets"
import { imgDetailDesain1, imgProfile1 } from "../../../../assets/dummy"
import { Button, ModalBlank } from "../../../../component"
import { IconChat, IconLocation, IconProfile, IconStart } from "../../../../component/Icon"
import "./DetailDesain.css"

const UserDetailDesain: React.FC = () => {
    //------ Modal Confirm Payment-------
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
    return (
        <>
            <main className="userDetailDesain-container">
                <article className="userDetailDesain-detail">
                    <figure className="userDetailDesain-detail-figure">
                        <img src={imgDetailDesain1} alt="detail desain" />
                    </figure>
                    <section className="userDetailDesain-detail-content">
                        <header className="userDetailDesain-detail-content-header">Kamar Tidur Modern Estetik</header>
                        <section className="userDetailDesain-detail-content-price">
                            Rp. 10.000.000
                            <section className="sold-box">5 Terjual</section>
                        </section>
                        <section className="userDetailDesain-detail-content-desc">
                            Kamar tidur dengan sensasi dan tema barat, memberikan kesan mewah dan elegan pada ruang tidur.
                        </section>
                        <section className="userDetailDesain-detail-content-descTwo"><span className="icon-desc"><IconLocation size="lg" /></span>Balikpapan, Indonesia</section>
                        <section className="userDetailDesain-detail-content-descTwo"><span className="icon-desc"><IconStart size="lg" /></span>4.9 (5 Ulasan)</section>
                        <section className="userDetailDesain-detail-footer">
                            <section className="userDetailDesain-detail-footer-btn"><Button type="secondary"><IconChat className="icon-chat" />Hubungi</Button></section>
                            <section className="userDetailDesain-detail-footer-btn"><Button onClick={toggleModal}>Pesan Desain</Button></section>
                        </section>
                    </section>
                </article>
                <article className="userDetailDesain-specification">
                    <header className="userDetailDesain-specification-header">Spesifikasi Desain</header>
                    <section className="userDetailDesain-specification-desc">
                        <section className="title-specification">Panjang Ruangan</section><section className="value-specification">: 5 meter</section>
                        <section className="title-specification">Lebar Ruangan</section><section className="value-specification">: 3 meter</section>
                        <section className="title-specification">Tinggi Ruangan</section><section className="value-specification">: 4 meter</section>
                        <section className="title-specification">Model Ruangan</section><section className="value-specification">: Classic But Estetik</section>
                    </section>
                    <section className="userDetailDesain-specification-desc">
                        Deskripsi :<br />Kamar tidur dengan sensasi dan tema barat, memberikan kesan mewah dan elegan pada ruang tidur. Kamar tidur dengan sensasi dan tema barat, memberikan kesan mewah dan elegan pada ruang tidur.
                    </section>
                </article>
                <article className="userDetailDesain-desainer">
                    <figure className="userDetailDesain-desainer-image"><IconProfile size="xxl" image={imgProfile1} /></figure>
                    <section className="userDetailDesain-desainer-desc">
                        <section className="company">PT. Media Kreasi Abadi</section>
                        <section className="rating"><IconStart size="lg" /><span className="ratingText" >4.9  (5 Ulasan)</span></section>
                        <section className="location">Balikpapan Timur</section>
                    </section>
                    <section className="userDetailDesain-desainer-btn">
                        <Button>Kunjungi</Button>
                    </section>
                </article>
            </main>
            <ModalBlank
                visible={showModal}
                onClose={toggleModal}
                OnStay={onStayModal}
            >
                <section className="modalConfirmPayment-title">
                    Ingin Melanjutkan ke Pembayaran?
                </section>
                <section className="modalConfirmPayment-ilustration">
                    <img src={IlustrationAtmMachine} alt="Ilustration Register Success" className="imgIlustrationConfirmPayment" />
                </section>
                <section className="modalConfirmPayment-option">
                    <section className="modalConfirmPayment-option-btn"><Button type="secondary" onClick={toggleModal}>Batal</Button></section>
                    <section className="modalConfirmPayment-option-btn"><Button onClick={navigatePayment}>Bayar</Button></section>
                </section>

            </ModalBlank>
        </>
    )
}

export default UserDetailDesain