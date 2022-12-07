import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { imgDesain1, imgDesain2, imgDesain3, imgKategori1, imgKategori2, imgKategori3, imgKategori4, imgKategori5, imgPromo1 } from "../../../assets/dummy"
import { Button, ImageSlide, ProductCard } from "../../../component"
import { IconBathroom, IconBedroom, IconStart, IconVisitorRoom, IconWorkspace } from "../../../component/Icon"
import { DesignService } from "../../../services"
import { Design } from "../../../types/Design"
import "./UserDashboard.css"

const UserDashboard: React.FC = () => {
    const navigate = useNavigate()
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

    //---- Handle Category ------
    const handleCategory = () => {
        navigate('/kategori')
    }

    const handleAllCategory = () => {
        navigate('/semua_kategori')
    }

    useEffect(() => {
        getAllDesigns()
    }, [navigate])

    return (
        <main className="userDashbord-container">
            <main className="userDashbord-mainOne">
                <ImageSlide data={[
                    imgPromo1,
                    'https://vector41.com/wp-content/uploads/2019/05/arsitek-medan-vector-41-rumah-tropis-medan-adit-alt-1-002.jpg',
                    'https://4.bp.blogspot.com/-_K_s-xBsAvw/XEcYvZP52UI/AAAAAAAAubA/B8W6jEo6d7M-OzCEaDZ6k4i_jRr9fzIyQCLcBGAs/s1600/Desain%2Brumah%2Bmodern%2B17.jpg'
                ]} />
            </main>
            <main className="userDashbord-mainTwo">
                <article className="userDashboard-mainTwo-articleOne">
                    <section className="referensiRuangan">
                        <header className="header">Referensi Ruangan</header>
                        <section className="boxIconReferensi">
                            <section className="iconReferensi" onClick={handleCategory}>
                                <section className="icon"><IconVisitorRoom /></section>
                                <section className="title">Ruang Tamu</section>
                            </section>
                            <section className="iconReferensi" onClick={handleCategory}>
                                <section className="icon"><IconWorkspace /></section>
                                <section className="title">Ruang Kerja</section>
                            </section>
                            <section className="iconReferensi" onClick={handleCategory}>
                                <section className="icon"><IconBedroom /></section>
                                <section className="title">Kamar Tidur</section>
                            </section>
                            <section className="iconReferensi" onClick={handleCategory}>
                                <section className="icon"><IconBathroom /></section>
                                <section className="title">Kamar Mandi</section>
                            </section>
                            <section className="iconReferensi" onClick={handleCategory}>
                                <section className="icon"><IconBathroom /></section>
                                <section className="title">Kamar Mandi</section>
                            </section>
                            <section className="iconReferensi" onClick={handleCategory}>
                                <section className="icon"><IconBathroom /></section>
                                <section className="title">Kamar Mandi</section>
                            </section>
                            <section className="iconReferensi" onClick={handleCategory}>
                                <section className="icon"><IconBathroom /></section>
                                <section className="title">Kamar Mandi</section>
                            </section>
                            <section className="iconReferensi" onClick={handleCategory}>
                                <section className="icon"><IconBathroom /></section>
                                <section className="title">Kamar Mandi</section>
                            </section>
                            <section className="iconReferensi" onClick={handleCategory}>
                                <section className="icon"><IconBathroom /></section>
                                <section className="title">Kamar Mandi</section>
                            </section>
                        </section>
                    </section>
                    <section className="daftarDesainer">
                        <section className="boxheader">
                            <header className="header">Daftar Desainer</header>
                            <section className="link">Lihat Semua</section>
                        </section>
                        <section className="boxIconDesainer">
                            <section className="iconDesainer">
                                <img src={imgDesain1} alt="Media Kreasi" />
                                <section className="deskripsi">
                                    <span className="content">Media Kreasi <br />
                                        <IconStart /> 4.7
                                    </span>
                                </section>
                            </section>
                            <section className="iconDesainer">
                                <img src={imgDesain2} alt="Pusat Ilmu" />
                                <section className="deskripsi">
                                    <span className="content">Pusat Ilmu <br />
                                        <IconStart /> 4.7
                                    </span>
                                </section>
                            </section>
                            <section className="iconDesainer">
                                <img src={imgDesain3} alt="Tirta Dharma" />
                                <section className="deskripsi">
                                    <span className="content">Tirta Dharma <br />
                                        <IconStart /> 4.7
                                    </span>
                                </section>
                            </section>
                            <section className="iconDesainer">
                                <img src={imgDesain3} alt="Tirta Dharma" />
                                <section className="deskripsi">
                                    <span className="content">Media Kreasi <br />
                                        <IconStart /> 4.7
                                    </span>
                                </section>
                            </section>
                        </section>
                    </section>
                    <section className="kategori">
                        <ul>
                            <li onClick={handleAllCategory}><Button type="secondary"><img src={imgKategori1} alt="kategori" /><span className="detailKategori">Kategori</span></Button></li>
                            <li><Button type="secondary"><img src={imgKategori2} alt="kategori" /><span className="detailKategori">Peribadatan</span></Button></li>
                            <li><Button type="secondary"><img src={imgKategori3} alt="kategori" /><span className="detailKategori">Layanan Umum</span></Button></li>
                            <li><Button type="secondary"><img src={imgKategori4} alt="kategori" /><span className="detailKategori">Sarana Pendidikan</span></Button></li>
                            <li><Button type="secondary"><img src={imgKategori5} alt="kategori" /><span className="detailKategori">Layanan Kesehatan</span></Button></li>
                        </ul>
                    </section>
                </article>
            </main>
            <main className="userDashbord-mainThree">
                <article className="userDashbord-mainThree-articleOne">
                    <ProductCard data={designsData} />
                    <ProductCard data={designsData} />
                    <ProductCard data={designsData} />
                </article>
                <article className="userDashbord-mainThree-articleTwo">
                    <Button type="colorfull" fontSize="lg">Selengkapnya</Button>
                </article>
            </main>
        </main>
    )
}

export default UserDashboard