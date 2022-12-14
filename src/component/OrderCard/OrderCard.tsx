import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { imgProfile1 } from "../../assets/dummy"
import Button from "../Button/Button"
import { IconProfile } from "../Icon"
import "./OrderCard.css"

interface OrderCardProps<T = any> {
    data: T[]
}
const OrderCard: React.FC<OrderCardProps> = props => {
    const navigate = useNavigate()
    const [designData, setDesignData] = useState<any[]>([])

    //------- currency format -------
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    })

    // ------- Inititate Design Order ------
    const initiateDesign = (data: any[]) => {
        setDesignData(data)
    }

    // ------- Handle Review -------
    const handleReview = (id: number) => {
        navigate(`/penilaian?id=${id}`)
    }

    // ------- Handle Payment -------
    const handlePayment = (id: number) => {
        navigate(`/pembayaran?id=${id}`)
    }

    //------- Handle Contact ------
    const handleContact = () => {
        navigate('/message')
    }

    useEffect(() => {
        if (props.data.length === 0) return
        initiateDesign([...props.data])
    }, [props.data])

    return (
        <>
            {designData.length > 0 ? designData.map(data => {
                return (
                    <section className="orderCard-box" key={data.id}>
                        <section className="orderCard-header">
                            <section className="orderCard-company">
                                <IconProfile size="xs" image={imgProfile1} /><span className="text">Sejahter Jaya Gr.</span>
                            </section>
                            <section className={data.status === "Perlu Dibayar" ? "orderCard-status payment-state" : data.status === "Selesai" ? "orderCard-status success-state" : "orderCard-status processed-state"}>
                                {data.status}
                            </section>
                        </section>
                        <section className="orderCard-content">
                            <figure className="orderCard-image">
                                <img src={`http://${data.design.imageUrl}`} alt="desain" />
                            </figure>
                            <section className="orderCard-desc">
                                {data.design.title}
                                <section className="orderCard-desc-size">Ukuran 3 x 9 meter</section>
                            </section>
                        </section>
                        <section className="orderCard-price">
                            Total Harga:<span className="orderCard-price-text">{formatter.format(data.price)}</span>
                        </section>
                        <section className="orderCard-add">
                            <section className="orderCard-add-text">
                                Berikan penilaian untuk desain yang telah anda pesan. Ini akan membantu desainer untuk berkembang.
                            </section>
                            <section className="orderCard-add-btn">
                                <Button onClick={() => handleReview(data.id)}>Beri Penilaian </Button>
                            </section>
                        </section>
                        {data.status !== "Selesai" &&
                            <section className="orderCard-add">
                                <section className="orderCard-add-text">
                                    Segera lakukan pembayaran, pesanan akan otomatis hilang jika melebihi 2 hari setelah pemesanan
                                </section>
                                <section className="orderCard-add-btn">
                                    <Button onClick={() => handlePayment(data.id)}>Lakukan Pembayaran</Button>
                                </section>
                            </section>
                        }
                        <section className="orderCard-add">
                            <section className="orderCard-add-text">
                                Konsultasikan pemesanan dengan cara menghubungi desainer
                            </section>
                            <section className="orderCard-add-btn">
                                <Button onClick={handleContact}>Hubungi Desainer</Button>
                            </section>
                        </section>
                        {/* <section className="orderCard-progress">
                            <ProgressBar bgColor="#101B94" progress='70' height={40} />
                        </section> */}
                    </section>
                )
            }) : null}
        </>
    )
}

export default OrderCard