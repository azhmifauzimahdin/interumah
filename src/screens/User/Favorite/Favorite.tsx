import React, { useEffect, useState } from "react"
import { IlustrationFavorite } from "../../../assets"
import { Button, ProductCard } from "../../../component"
import { CategoryService, DesignService, FavoriteService } from "../../../services"
import { Category } from "../../../types/Category"
import { Design } from "../../../types/Design"
import { Favorite } from "../../../types/Favorite"
import './Favorite.css'

const UserFavorite: React.FC = () => {
    const [designFavorite, setDesignFavorite] = useState<Favorite[]>([])
    const [designsData, setDesignsData] = useState<Design[]>([])
    const [categoriesData, setCategoriesData] = useState<Category[]>([])

    //------ Get All Design ------
    const getAllDesigns = async () => {
        try {
            const response = await DesignService.getAllDesigns()
            setDesignsData(response.data.data)
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        //------ Get favorite designs ------
        FavoriteService.getAllDesignFavorite()
            .then(response => {
                setDesignFavorite(response.data.data)
            })
            .catch(error => console.log("error", error))

        //------ Get All Categories ------
        CategoryService.getAllCategories()
            .then(response => setCategoriesData(response.data.data.categories))
            .catch(error => console.log("error", error))
        getAllDesigns()
    }, [])
    return (
        <>
            <main className="userFavorite-containerFavorite">
                {designFavorite.length > 0 ?
                    <article className="userFavorite-boxFavorite">
                        <section className="userFavorite-menuCategory">
                            <ul>
                                <li><Button size="sm" button="btnProduct">Semua Kategori</Button></li>
                                {categoriesData.length > 0 ? categoriesData.map(data => (
                                    <li key={data.id}><Button size="sm" button="btnProduct" type="secondary" name={data.id}>{data.name}</Button></li>
                                )) : null}
                            </ul>
                        </section>
                        <section className="userFavorite-FavoriteList">
                            <ProductCard data={designFavorite} />
                        </section>
                    </article>
                    :
                    <article className="userFavorite-box">
                        <figure className="userFavorite-ilustration">
                            <img src={IlustrationFavorite} alt="Ilustration favorite" />
                        </figure>
                        <section className="userFavorite-description">
                            <header className="userFavorite-description-header">
                                Desain yang kamu sukai masih kosong
                            </header>
                            <section className="userFavorite-description-content">
                                Yukk!! cari desain kesukaanmu, dan segera wujudkan mimpi desain interiormu
                            </section>
                        </section>
                        <section className="userFavorite-button">
                            <Button>Temukan Desainmu</Button>
                        </section>
                    </article>
                }
            </main>
            {designFavorite.length < 0 &&
                <main className="userFavorite-containerRecommendation">
                    <header className="userFavorite-headerRecommendation">Kamu mungkin suka..</header>
                    <section className="userFavoirete-desainRecommendation">
                        <ProductCard data={designsData} />
                    </section>
                    {/* <section className="userFavorite-buttonRecommendation">
                    <Button type="colorfull" fontSize="lg">Muat Lebih Banyak</Button>
                </section> */}
                </main>
            }
        </>
    )
}

export default UserFavorite