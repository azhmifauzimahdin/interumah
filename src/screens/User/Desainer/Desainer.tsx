import React, { useEffect, useState } from "react"
import { imgPoster1, imgProfile2 } from "../../../assets/dummy"
import { Button, ProductCard, ReviewBox } from "../../../component"
import { IconChat, IconFolderOutline, IconHandPayment, IconHomeCityOutline, IconLocation, IconStart, IconUsers } from "../../../component/Icon"
import { DesignService } from "../../../services"
import { Design } from "../../../types/Design"
import "./Desainer.css"

const UserDesainer: React.FC = () => {
    const [designsData, setDesignData] = useState<Design[]>([])

    //------ Get All Design ------
    const getAllDesigns = async () => {
        try {
            const response = await DesignService.getAllDesigns()
            setDesignData(response.data.data)
        } catch (error) {
            console.log('error', error)
        }
    }

    //------ Menu Designer ------
    const [menu, setMenu] = useState<number>(0)
    const menuDesigner = ["Halaman Utama", "Tentang Desainer", "Proyek", "Ulasan"]
    const cekMenu = (index: number) => {
        setMenu(index)
    }

    useEffect(() => {
        getAllDesigns()
    }, [])

    return (
        <main className="userDesainer-container">
            <article className="userDesainer-boxOne">
                <figure className="userDesainer-profile">
                    <img src={imgProfile2} alt="Desainer" />
                </figure>
                <section className="userDesainer-boxDetail">
                    <section className="userDesainer-detail"><IconHomeCityOutline /><span className="detail-text">PT. Furniture Masa Depan</span></section>
                    <section className="userDesainer-detail"><IconLocation color="white" size="lg" /><span className="detail-text">Jl. Praja Muda II, Balikpapan</span></section>
                    <section className="userDesainer-detail"><IconUsers /><span className="detail-text">Bergabung sejak juli 2022</span></section>
                </section>
                <section className="userDesainer-boxDetail">
                    <section className="userDesainer-detail"><IconFolderOutline /><span className="detail-text">20 Proyek</span></section>
                    <section className="userDesainer-detail"><IconHandPayment /><span className="detail-text">5 Terjual</span></section>
                    <section className="userDesainer-detail"><IconStart size="lg" color="white" /><span className="detail-text">4.9 Penilaian (5 Ulasan)</span></section>
                </section>
                <section className="userDesainer-btn-chat">
                    <Button size="sm" type="green"><IconChat color="white" size="sm" /><span className="detail-text">Chat</span></Button>
                </section>
            </article>
            <article className="userDesainer-boxTwo">
                {menuDesigner.map((data, index) => {
                    const classNameMenu = index === menu ? "userDesainer-menuDetail menuDetailActive" : "userDesainer-menuDetail"
                    return (
                        <section className={classNameMenu} onClick={() => cekMenu(index)}>{data}</section>
                    )
                })}
            </article>

            {menu === 0 &&
                <>
                    <figure className="userDesainer-poster">
                        <img src={imgPoster1} alt="poster" />
                        <section className="userDesainer-poster-text">
                            PT. Furniture Masa Depan
                        </section>
                    </figure>
                    <article className="userDesainer-boxThree">
                        <header className="userDesainer-title-about">
                            Tentang Desainer
                        </header>
                        <section className="userDesainer-desc-about">
                            Furniture rumah merupakan desainer ahli dibidang interior rumah. Banyak jenis desain interior yang telah dikerjakan, mulai dari perusahaan, rumah pribadi, sampai tempat pelanan umum.
                        </section>
                        <header className="userDesainer-title-about">
                            Tentang Desainer
                        </header>
                        <section className="userDesainer-desc-about">
                            Jl. Raya jatiwaringin, RT 4 RW 5, Cipinang Melayu, Bontang, Balikpapan Timur, Kalimantan Timur
                        </section>
                    </article>
                    <article className="userDesainer-boxDesain">
                        <ProductCard data={designsData} />
                    </article>
                    <article className="userDesainer-reviewBox">
                        <ReviewBox />
                    </article>
                </>
            }
            {menu === 1 &&
                <>
                    <article className="userDesainer-boxThree">
                        <header className="userDesainer-title-about">
                            Tentang Desainer
                        </header>
                        <section className="userDesainer-desc-about">
                            Furniture rumah merupakan desainer ahli dibidang interior rumah. Banyak jenis desain interior yang telah dikerjakan, mulai dari perusahaan, rumah pribadi, sampai tempat pelanan umum.
                        </section>
                        <header className="userDesainer-title-about">
                            Tentang Desainer
                        </header>
                        <section className="userDesainer-desc-about">
                            Jl. Raya jatiwaringin, RT 4 RW 5, Cipinang Melayu, Bontang, Balikpapan Timur, Kalimantan Timur
                        </section>
                    </article>
                </>
            }
            {menu === 2 &&
                <>
                    <article className="userDesainer-boxDesain">
                        <ProductCard data={designsData} />
                    </article>
                </>
            }
            {menu === 3 &&
                <>
                    <article className="userDesainer-reviewBox">
                        <ReviewBox />
                    </article>
                </>
            }
        </main>
    )
}

export default UserDesainer