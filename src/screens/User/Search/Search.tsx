import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { IlustrationFavorite } from "../../../assets"
import { Button, DesainerCard, ProductCard } from "../../../component"
import { IconLamp, IconManArtist } from "../../../component/Icon"
import { CategoryService, DesignService } from "../../../services"
import { Category } from "../../../types/Category"
import { Design } from "../../../types/Design"
import "./Search.css"

const UserSearch: React.FC = () => {
    const [categoriesData, setCategoriesData] = useState<Category[]>([])
    const [designData, setDesignData] = useState<Design[]>([])

    //------ Get Keyword ------
    let [searchParams] = useSearchParams()
    const keyword = searchParams.get("keyword")

    //------ Get All Categories ------
    const getAllCategories = async () => {
        try {
            const response = await CategoryService.getAllCategories()
            setCategoriesData(response.data.data.categories)
        } catch (error) {
            console.log('error', error)
        }
    }

    const handleButtonCategory = (e: any) => {
        // let nameOfFunction = e.target.name
    }

    //------ Get All Designer -------


    //------ Data Desainer ------
    const desainerData = [
        {
            id: 1,
            nama: "PT. Furniture Jaya",
            proyek: 5,
            terjual: 3,
            alamat: "Jl. Praja Muda II, Balikpapan",
            rating: 4
        },
        {
            id: 2,
            nama: "PT. Furniture Jaya",
            proyek: 5,
            terjual: 3,
            alamat: "Jl. Praja Muda II, Balikpapan",
            rating: 4
        },
        {
            id: 3,
            nama: "PT. Furniture Jaya",
            proyek: 5,
            terjual: 3,
            alamat: "Jl. Praja Muda II, Balikpapan",
            rating: 4
        },
        {
            id: 4,
            nama: "PT. Furniture Jaya",
            proyek: 5,
            terjual: 3,
            alamat: "Jl. Praja Muda II, Balikpapan",
            rating: 4
        },
    ]

    //------ Menu Data ------
    const menuData = [
        {
            icon: <IconLamp className="iconMenuSearch" />,
            title: "Produk Desain"
        },
        {
            icon: <IconManArtist className="iconMenuSearch" />,
            title: "Desainer"
        }
    ]

    //------ Content Search ------
    const [menu, setMenu] = useState<number>(0)
    const cek = (index: number) => {
        setMenu(index)
    }

    useEffect(() => {
        DesignService.searchDesignByTitle(keyword as string).then(response => setDesignData(response.data.data)).catch(error => console.log("error", error))
        getAllCategories()
    }, [])
    return (
        <main className="userSearch-container">
            <aside className="userSearch-aside">
                <header className="userSearch-aside-header">Kategori</header>
                <section className="userSearch-aside-content" >
                    <ul>
                        <li><Button size="sm">Semua Kategori</Button></li>
                        {categoriesData.length > 0 ? categoriesData.map(data => (
                            <li key={data.id}><Button size="sm" type="secondary" name={data.id} onClick={handleButtonCategory}>{data.name}</Button></li>
                        )) : null}
                    </ul>
                </section>
            </aside>
            <section className="userSearch-section">
                <header className="userSearch-section-header">
                    Hasil Pencarian
                </header>
                <section className="userSearch-section-keyword">
                    Menampilkan hasil untuk pencarian “{keyword}”
                </section>
                <section className="userSearch-section-content">
                    <section className="userSearch-section-content-button">
                        <ul>
                            {menuData.length > 0 && menuData.map((data, index) => {
                                const className = index === menu ? "menuSearch activeMenuSearch" : "menuSearch"
                                return (
                                    <li key={index} onClick={() => cek(index)} className={className}>{data.icon}<span className="text">{data.title}</span></li>
                                )
                            })}
                        </ul>
                    </section>
                    <section className="userSearch-section-content-product">
                        {menu === 0 ?
                            <>
                                {designData.length > 0 ?
                                    <ProductCard data={designData} />
                                    :
                                    <article className="userSearch-empytyBox">
                                        <figure className="userSearch-empyty-ilustration">
                                            <img src={IlustrationFavorite} alt="Ilustration" />
                                        </figure>
                                        <section className="userSearch-empyty-desc">
                                            Desain yang kamu cari tidak ada
                                        </section>
                                    </article>
                                }
                            </>
                            :
                            <>
                                <DesainerCard data={desainerData} />
                            </>
                        }
                    </section>
                </section>
            </section>
        </main>
    )
}

export default UserSearch