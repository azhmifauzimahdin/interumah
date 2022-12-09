import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { imgKategori1, imgKategori2, imgKategori3, imgKategori4, imgKategori5, imgPromo1 } from "../../../assets/dummy"
import { Button, ImageSlide, ProductCard } from "../../../component"
import { IconStart, IconVisitorRoom } from "../../../component/Icon"
import { CategoryService, DesignerService, DesignService } from "../../../services"
import { Category } from "../../../types/Category"
import { Design, Designer } from "../../../types/Design"
import "./UserDashboard.css"

const UserDashboard: React.FC = () => {
    const navigate = useNavigate()
    const [designsData, setDesignData] = useState<Design[]>([])
    const [designerData, setDesignerData] = useState<Designer[]>([])
    const [categoriesData, setCategoriesData] = useState<Category[]>([])

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
    const handleCategory = (id: number) => {
        navigate(`/kategori?id=${id}`)
    }

    const handleAllCategory = () => {
        navigate('/semua_kategori')
    }

    //------- Handle Designer ------
    const handlerDesigner = (id: number) => {
        navigate(`/desainer?id=${id}`)
    }

    useEffect(() => {
        getAllDesigns()

        //------ Get All Categories ------
        CategoryService.getAllCategories()
            .then(response => setCategoriesData(response.data.data.categories))
            .catch(error => console.log("error", error))
        //------ Get All Designer ------
        DesignerService.getAllDesigner()
            .then(response => setDesignerData(response.data.data))
            .catch(error => console.log("error", error))
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
                            {categoriesData.length > 0 ? categoriesData.map(data => {
                                return (
                                    <section className="iconReferensi" key={data.id} onClick={() => handleCategory(data.id)}>
                                        <section className="icon">
                                            <img src={`http://${data.icon}`} alt="icon" />
                                        </section>
                                        <section className="title">{data.name}</section>
                                    </section>
                                )
                            }) : null}
                        </section>
                    </section>
                    <section className="daftarDesainer">
                        <section className="boxheader">
                            <header className="header">Daftar Desainer</header>
                            <section className="link">Lihat Semua</section>
                        </section>
                        <section className="boxIconDesainer">
                            {designerData.length > 0 ? designerData.map(data => {
                                return (
                                    <section className="iconDesainer" key={data.id} onClick={() => handlerDesigner(data.id)}>
                                        <img src={`http://${data.imageUrl}`} alt="Media Kreasi" />
                                        <section className="deskripsi">
                                            <span className="content">{data.name}<br />
                                                <IconStart /> 4.7
                                            </span>
                                        </section>
                                    </section>
                                )
                            }) : null}
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
                </article>
                {/* <article className="userDashbord-mainThree-articleTwo">
                    <Button type="colorfull" fontSize="lg">Selengkapnya</Button>
                </article> */}
            </main>
        </main>
    )
}

export default UserDashboard