import React, { useEffect, useState } from "react"
import { IlustrationResume } from "../../../assets"
import { OrderCard } from "../../../component"
import { OrderService } from "../../../services"
import { DesignOrder } from "../../../types/Order"
import "./MyOrder.css"

const UserOrder: React.FC = () => {
    window.scrollTo(0, 0)
    const [designOrder, setDesignOrder] = useState<DesignOrder[]>([])
    useEffect(() => {
        OrderService.getAllOrderHistory()
            .then(response => setDesignOrder(response.data.data))
            .catch(error => console.log('error', error))
    })

    return (
        <main className="userOder-container">
            <nav className="userOrder-nav">
                <ul>
                    <li>Semua</li>
                    <li>Selesai</li>
                    <li>Dalam Proses</li>
                    <li>Belum Dinilai</li>
                    <li>Belum Dibayar</li>
                </ul>
            </nav>
            <article className="userOrder-box">
                {designOrder.length > 0 ?
                    <OrderCard data={designOrder} />
                    :
                    <article className="userOrder-content">
                        <figure className="userOrder-content-ilustration">
                            <img src={IlustrationResume} alt="resume" />
                        </figure>
                        <section className="userOrder-content-title">
                            Belum Ada Pesanan
                        </section>
                        <section className="userOrder-content-desc">
                            Kamu bisa berkonsultasi dengan dengan desainer, memesan desain dan deal ini itu. Cobain, Yuk!
                        </section>
                    </article>
                }
            </article>
        </main>
    )
}

export default UserOrder