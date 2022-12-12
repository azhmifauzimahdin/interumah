import React, { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { IlustrationOk } from "../../../../assets"
import { Button, DropDownPayment, ModalBlank } from "../../../../component"
import { IconCloudUpload, IconProfile } from "../../../../component/Icon"
import { DesignService, OrderService } from "../../../../services"
import { Design } from "../../../../types/Design"
import { OrderData } from "../../../../types/Order"
import "./Payment.css"

const UserPayment: React.FC = () => {
    window.scrollTo(0, 0)
    const [orderData, setOrderData] = useState<OrderData>()
    const [designData, setDesignData] = useState<Design>()
    const [sending, setSending] = useState<boolean>(false)

    //------ Get Params -------
    let [searchParams] = useSearchParams()
    const idOrder = parseInt(searchParams.get("id") as string)
    const idDesain = parseInt(searchParams.get("idDesign") as string)

    //------- currency format -------
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    })

    //------ Get Order By ID -------
    useEffect(() => {
        if (idOrder) {
            OrderService.getOrderByID(idOrder)
                .then(response => setOrderData(response.data.data))
                .catch(error => console.log('error', error))
        }

    }, [idOrder])

    //------ Get Design By ID ------
    useEffect(() => {
        if (idDesain) {
            DesignService.getDesignByID(idDesain as number)
                .then(response => setDesignData(response.data.data))
                .catch(error => console.log('error', error))
        }
        if (orderData?.design.id) {
            DesignService.getDesignByID(orderData?.design.id as number)
                .then(response => setDesignData(response.data.data))
                .catch(error => console.log('error', error))
        }
    }, [idDesain, orderData?.design.id])

    //------ Upload Receipt ------
    const uploadReceipt = async (e: React.FormEvent<HTMLFormElement>) => {
        setSending(true)
        e.preventDefault()
        try {
            const formData = new FormData(e.currentTarget)
            const files = e.currentTarget.files
            formData.append('files', files)

            await OrderService.uploadReceipt(26, formData)
            setSending(false)
            toggleModal()
        } catch (error) {
            setSending(false)
            console.log('error', error)
        }
    }

    //------ Navigate Detail Design -------
    const navigateDetailDesign = (id: number) => {
        navigate(`/detail_desain?desain=${id}`)
    }

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
        navigate('/pesananku')
    }

    //------ Option Dropdown ------
    const options = [
        { value: "bni", bank: "BNI", image: "https://cdn-2.tstatic.net/bangka/foto/bank/images/logo-bni.jpg" },
        { value: "bca", bank: "BCA", image: "https://i.pinimg.com/originals/0d/a8/41/0da841a2721acd4740f5b5d7d049c0fb.png" },
        { value: "bri", bank: "BRI", image: "https://i2.wp.com/febi.uinsaid.ac.id/wp-content/uploads/2020/11/Logo-BRI-Bank-Rakyat-Indonesia-PNG-Terbaru.png?fit=1650%2C1408&ssl=1" },
    ]

    //------ Image Preview -------
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState<string>('')

    useEffect(() => {
        if (!selectedFile) {
            setPreview('')
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
    }


    return (
        <>
            <main className="userPayment-container">
                <form onSubmit={uploadReceipt}>
                    <article className="userPayment-wrapper">
                        <article className="userPayment-boxOne">
                            <header className="userPayment-header">Detail Pesanan</header>
                            <section className="userPayment-content">
                                <section className="detail-header">
                                    <section className="detail-company">
                                        <IconProfile size="xs" image={`http://${designData?.designer.imageUrl}`} /><span className="text">{designData?.designer.name}</span>
                                    </section>
                                    <section className="detail-show" onClick={() => navigateDetailDesign(designData?.id as number)}>
                                        Lihat Detail
                                    </section>
                                </section>
                                <section className="detail-content">
                                    <figure className="detail-image">
                                        <img src={`http://${designData?.imageUrl}`} alt="desain" />
                                    </figure>
                                    <section className="detail-desc">
                                        {designData?.title}
                                        <section className="detail-desc-size">Ukuran 3 x 9 meter</section>
                                    </section>
                                </section>
                                <section className="detail-footer">
                                    Total Harga:<span className="detail-footer-price"> {formatter.format(designData?.price as any)}</span>
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
                                        {formatter.format(designData?.price as any)} <br />3 x 9 Meter <br />Bank BNI
                                    </section>
                                    <section className="summary-content-key">
                                        Bukti Transfer
                                    </section>
                                    <section className={orderData?.receipts && orderData.receipts.length > 0 ? "summary-content-valueSucces" : "summary-content-valueWarning"}>
                                        {orderData?.receipts && orderData.receipts.length > 0 ? "Sudah" : "Belum"}
                                    </section>
                                </section>
                            </section>
                            <section className="userPayment-button">
                                <Button disabled={sending}>Lakukan Pembayaran</Button>
                            </section>
                        </article>
                        <article className="userPayment-boxOne">
                            <header className="userPayment-header">Metode Pembayaran</header>
                            <section className="userPayment-desc">Silahkan lakukan pembayaran ke bank yang dipilih dengan nomer rekening dibawah ini!</section>
                            <section>
                                <DropDownPayment
                                    option={options}
                                />
                            </section>
                        </article>
                        <article className="userPayment-boxOne">
                            <header className="userPayment-header">Bukti Transfer</header>
                            <section className="userPayment-desc" >
                                Setelah melakukan transfer, Silahkan unggah bukti transfer untuk melanjutkan proses pembayaran
                            </section>
                            <section className="userPayment-uploadImage">
                                <label className="userPayment-buttonUpload">
                                    <IconCloudUpload className="icon-cloudUpload" />Unggah Bukti Transfer
                                    <input type='file' onChange={onSelectFile} className="coba" name="image" accept="image/*" />
                                </label>
                                <section className="userPayment-previewImage">
                                    {selectedFile && <img src={preview} alt="preview" />}
                                </section>
                            </section>
                        </article>
                    </article>
                </form>
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