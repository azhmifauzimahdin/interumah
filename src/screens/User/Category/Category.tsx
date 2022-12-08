import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { imgCategory2, imgCategory3, imgCategory4, imgCategory5 } from "../../../assets/dummy"
import { CategoruCard, PosterCategory, ProductCard } from "../../../component"
import { DesignService } from "../../../services"
import { Design } from "../../../types/Design"
import "./Category.css"

const UserCategory: React.FC = () => {
    const [designsData, setDesignData] = useState<Design[]>([])

    //------ Get Parametes ------
    let [searchParams] = useSearchParams()
    const idCategory = parseInt(searchParams.get("id") as string)

    useEffect(() => {
        //------ Get Design by ID Category ------
        DesignService.getDesignByIDCategory(idCategory)
            .then(response => setDesignData(response.data.data))
            .catch(error => console.log("error", error))

    }, [idCategory])

    const categoryData = [
        {
            img: imgCategory2,
            title: "Dapur F30 Minimalis",
            company: "Sanjaya Corp"
        },
        {
            img: imgCategory3,
            title: "Ruang Tunggu RS",
            company: "MediaCrop"
        },
        {
            img: imgCategory4,
            title: "Keluarga Bahagia",
            company: "Ruang Kenangan"
        },
        {
            img: imgCategory5,
            title: "Tamu Retro Classic",
            company: "Sanjaya Corp"
        },
        {
            img: imgCategory2,
            title: "Dapur F30 Minimalis",
            company: "Sanjaya Corp"
        },
        {
            img: imgCategory3,
            title: "Dapur F30 Minimalis",
            company: "Sanjaya Corp"
        },
    ]
    return (
        <>
            <main className="userCategory-container">
                <PosterCategory data={designsData} />
                <section className="userCategory-rekomendation-wrapper">
                    <section className="userCategory-rekomendation-title">Rekomendasi Untuk Anda</section>
                    <section className="userCategory-rekomendation-card">
                        <CategoruCard data={categoryData} />
                    </section>
                </section>
            </main>
            <main className="userCategory-containerDesainer">

                <section className="userCategory-desain-wrapper">
                    <ProductCard data={designsData} />
                </section>
            </main>
        </>
    )
}

export default UserCategory