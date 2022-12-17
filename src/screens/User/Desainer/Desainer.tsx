import React, { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { imgPoster1 } from "../../../assets/dummy"
import { Button, LoadingScreen, ProductCard } from "../../../component"
import { IconChat, IconFolderOutline, IconHandPayment, IconHomeCityOutline, IconLocation, IconStart, IconUsers } from "../../../component/Icon"
import { userService } from "../../../services"
import { User } from "../../../types/User"
import "./Desainer.css"

const UserDesainer: React.FC = () => {
    const navigate = useNavigate()
    const [designerData, setDesignerData] = useState<User>()
    const [loading, setLoading] = useState<boolean>(false)

    //------ Scroll ------
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    //------ Get Keyword ------
    let [searchParams] = useSearchParams()
    const id = parseInt(searchParams.get("id") as string)

    //------ Menu Designer ------
    const [menu, setMenu] = useState<number>(0)
    const menuDesigner = ["Halaman Utama", "Tentang Desainer", "Proyek", "Ulasan"]
    const cekMenu = (index: number) => {
        setMenu(index)
    }

    //------ Initiate design ------
    const design = designerData?.designs.map(data => {
        let properties = {
            ...data,
            designer: designerData
        }
        return properties
    })

    //------ Handle Chat -------
    const handleChat = () => {
        navigate('/message')
    }

    useEffect(() => {
        setLoading(true)
        //------ Get Designer By ID------
        userService.getUserByID(id)
            .then(response => {
                setDesignerData(response.data.data)
                setLoading(false)
            })
            .catch(error => {
                console.log("error", error)
                setLoading(false)
            })
    }, [id])

    return (
        <main className="userDesainer-container">
            <article className="userDesainer-boxOne">
                <figure className="userDesainer-profile">
                    <img src={`http://${designerData?.imageUrl}`} alt="Desainer" />
                </figure>
                <section className="userDesainer-boxDetail">
                    <section className="userDesainer-detail"><IconHomeCityOutline /><span className="detail-text">{designerData?.name}</span></section>
                    <section className="userDesainer-detail"><IconLocation color="white" size="lg" /><span className="detail-text">{designerData?.address}</span></section>
                    <section className="userDesainer-detail"><IconUsers /><span className="detail-text">Bergabung sejak juli 2022</span></section>
                </section>
                <section className="userDesainer-boxDetail">
                    <section className="userDesainer-detail"><IconFolderOutline /><span className="detail-text">20 Proyek</span></section>
                    <section className="userDesainer-detail"><IconHandPayment /><span className="detail-text">5 Terjual</span></section>
                    <section className="userDesainer-detail"><IconStart size="lg" color="white" /><span className="detail-text">4.9 Penilaian (5 Ulasan)</span></section>
                </section>
                <section className="userDesainer-btn-chat">
                    <Button size="sm" type="green"><IconChat color="white" size="sm" /><span className="detail-text" onClick={handleChat}>Chat</span></Button>
                </section>
            </article>
            <article className="userDesainer-boxTwo">
                {menuDesigner.map((data, index) => {
                    const classNameMenu = index === menu ? "userDesainer-menuDetail menuDetailActive" : "userDesainer-menuDetail"
                    return (
                        <section className={classNameMenu} onClick={() => cekMenu(index)} key={index}>{data}</section>
                    )
                })}
            </article>

            {menu === 0 &&
                <>
                    <figure className="userDesainer-poster">
                        <img src={imgPoster1} alt="poster" />
                        <section className="userDesainer-poster-text">
                            {designerData?.name}
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
                            {designerData?.address}
                        </section>
                    </article>
                    <article className="userDesainer-boxDesain">
                        {loading ?
                            <LoadingScreen type="content" />
                            :
                            <>
                                {design !== undefined &&
                                    <ProductCard data={design} />
                                }
                            </>
                        }
                    </article>
                    <article className="userDesainer-reviewBox">
                        {/* <ReviewBox
                            rating="null"
                            amount={0}
                        /> */}
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
                            {designerData?.address}
                        </section>
                    </article>
                </>
            }
            {menu === 2 &&
                <>
                    <article className="userDesainer-boxDesain">
                        {loading ?
                            <LoadingScreen type="content" />
                            :
                            <>
                                {design !== undefined &&
                                    <ProductCard data={design} />
                                }
                            </>
                        }
                    </article>
                </>
            }
            {menu === 3 &&
                <>
                    <article className="userDesainer-reviewBox">
                        {/* <ReviewBox
                            rating="null"
                            amount={0}
                        /> */}
                    </article>
                </>
            }
        </main>
    )
}

export default UserDesainer