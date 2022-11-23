import React, { useEffect, useState } from "react"
import { Button, ProductCard } from "../../../component"
import { IconLamp, IconManArtist } from "../../../component/Icon"
import { CategoryService, DesignService } from "../../../services"
import { Category } from "../../../types/Category"
import { Design, SpecificDesign } from "../../../types/Design"
import "./Search.css"

const UserSearch: React.FC = () => {
    const [categoriesData, setCategoriesData] = useState<Category[]>([])
    const [designsData, setDesignData] = useState<Design[]>([])
    const [, setSpecificDesignData] = useState<SpecificDesign>()

    //------ Get All Categories ------
    const getAllCategories = async () => {
        try {
            const response = await CategoryService.getAllCategories()
            setCategoriesData(response.data.data.categories)
        } catch (error) {
            console.log('error', error)
        }
    }


    //------ Get All Design ------
    const getAllDesigns = async () => {
        try {
            const response = await DesignService.getAllDesigns()
            setDesignData(response.data.data)
        } catch (error) {
            console.log('error', error)
        }
    }
    //------ Get Specific Design ------
    const getSpecificDesign = async (id: number) => {
        try {
            const response = await DesignService.getSpecificDesigns(id)
            setSpecificDesignData(response.data.data)
        } catch (error) {
            console.log('error', error)
        }
    }

    const handleButtonCategory = (e: any) => {
        let nameOfFunction = e.target.name
        getSpecificDesign(nameOfFunction)
    }

    useEffect(() => {
        getAllCategories()
        getAllDesigns()
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
                    Menampilkan hasil untuk pencarian “Furniture Kamar Tidur”
                </section>
                <section className="userSearch-section-content">
                    <section className="userSearch-section-content-button">
                        <ul>
                            <li><IconLamp /><span className="text">Produk Desain</span></li>
                            <li><IconManArtist /><span className="text">Desainer</span></li>
                        </ul>
                    </section>
                    <section className="userSearch-section-content-product">
                        <ProductCard data={designsData} />
                    </section>
                </section>
            </section>
        </main>
    )
}

export default UserSearch