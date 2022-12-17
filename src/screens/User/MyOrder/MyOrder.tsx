import React, { useEffect, useState } from "react"
import { IlustrationResume } from "../../../assets"
import { LoadingScreen, OrderCard } from "../../../component"
import { OrderService } from "../../../services"
import { DesignOrder } from "../../../types/Order"
import "./MyOrder.css"

const UserOrder: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [designOrder, setDesignOrder] = useState<DesignOrder[]>([])
    const [designOrderFilter, setDesignOrderFilter] = useState<DesignOrder[]>([])

    //------ Get All Order History -------
    useEffect(() => {
        OrderService.getAllOrderHistory()
            .then(response => {
                setDesignOrder(response.data.data)
                setDesignOrderFilter(response.data.data)
                setLoading(false)
            })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            })
    }, [])

    //------ Filter Order History ------
    const filterOrder = (data: any[], filter: string) => {
        const newDatas = data.map(data => JSON.stringify(data))
        const filteredDatas = newDatas.filter(data => data.includes(filter))
        const normalizeDatas = filteredDatas.map(data => JSON.parse(data))

        return normalizeDatas
    }

    //------ Menu MyOrder ------
    const [menu, setMenu] = useState<number>(0)
    const menuMyOrder = ["Semua", "Selesai", "Dalam Proses", "Belum Dinilai", "Belum Dibayar"]
    const cekMenu = (index: number) => {
        setMenu(index)

        if (index === 0) {
            const result = filterOrder(designOrder, "")
            setDesignOrderFilter(result)
        }
        if (index === 1) {
            const result = filterOrder(designOrder, "Selesai")
            setDesignOrderFilter(result)
        }
        if (index === 2) {
            const result = filterOrder(designOrder, "Proses Desain")
            setDesignOrderFilter(result)
        }
        if (index === 3) {
            const result = filterOrder(designOrder, "Belum Dinilai")
            setDesignOrderFilter(result)
        }
        if (index === 4) {
            const result = filterOrder(designOrder, "Perlu Dibayar")
            setDesignOrderFilter(result)
        }
    }

    return (
        <main className="userOder-container">
            <nav className="userOrder-nav">
                {menuMyOrder.map((data, index) => {
                    const classNameMenu = index === menu ? "userOrder-menuDetail menuDetailActive" : "userOrder-menuDetail"
                    return (
                        <section className={classNameMenu} onClick={() => cekMenu(index)} key={index}>{data}</section>
                    )
                })}
            </nav>
            <article className="userOrder-box">
                {loading ?
                    <LoadingScreen type="content" />
                    :
                    <>
                        {designOrderFilter.length > 0 ?
                            <OrderCard data={designOrderFilter} />
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
                    </>
                }
            </article>
        </main>
    )
}

export default UserOrder