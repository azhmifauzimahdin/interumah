import React, { useEffect, useState } from "react"
import { IlustrationKonsultasi, IlustrationPilihDesainmu, IlustrationTemukan, IlustrationWujudkan, ImageOne, LogoFooter } from "../../assets"
import { imgStory1, imgStory2, imgStory3, imgStory4, imgStory5 } from "../../assets/dummy"
import { Button, ProductCard, StoryCard } from "../../component"
import { IconAppStore, IconFacebook, IconInstagram, IconPlayStore, IconTiktok, IconYoutube } from "../../component/Icon"
import { CategoryService, DesignService } from "../../services"
import { Category } from "../../types/Category"
import { Design, SpecificDesign } from "../../types/Design"
import "./LandingPage.css"

const LandingPage: React.FC = () => {
    const [categoriesData, setCategoriesData] = useState<Category[]>([])
    const [designsData, setDesignData] = useState<Design[]>([])
    const [, setSpecificDesignData] = useState<SpecificDesign>()

    const getAllCategories = async () => {
        try {
            const response = await CategoryService.getAllCategories()
            setCategoriesData(response.data.data.categories)
        } catch (error) {
            console.log('error', error)
        }
    }

    const getAllDesigns = async () => {
        try {
            const response = await DesignService.getAllDesigns()
            setDesignData(response.data.data)
        } catch (error) {
            console.log('error', error)
        }
    }

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
        <main className="landingPage-container">
            <main className="landingPage-mainOne">
                <article className="landingPage-mainOne-article">
                    <header className="header">#InterumahAja</header>
                    <section className="sectionOne">Koleksi Terbaru Desain Interior Trending Tahun 2020</section>
                    <section className="sectionTwo">Kamu bisa berkonsultasi dengan desainer professional terkait desain rumah impian Anda!</section>
                    <section className="sectionThree">
                        <Button size="lg" fontWeight="normal" fontSize="sm">Temukan Desainmu</Button>
                    </section>
                </article>
                <figure className="landingPage-mainOne-figure">
                    <img src={ImageOne} alt="Gambar Dekorasi Rumah" />
                </figure>
            </main>
            <main className="landingPage-mainTwo">
                <article className="landingPage-mainTwo-articleOne">
                    <header className="header">Tentang Interumah</header>
                    <section className="sectionOne">Interumah adalah sebuah platform pencarian jasa desainer interior yang berkomitmen untuk terus membuat customer nyaman dalam beraktifitas di dalam ruangan. Yukk ketahui apasaja yang dapat dilakukan di platform Interumah.</section>
                    <section className="sectionTwo">
                    </section>
                </article>
                <article className="landingPage-mainTwo-articleTwo">
                    <section className="section">
                        <figure className="figure">
                            <img src={IlustrationTemukan} alt="Ilustration" />
                        </figure>
                        <header>Temukan</header>
                        <section>Temukan kategori desain interiormu, kamu bisa memilih dari jenis kategori desain</section>
                    </section>
                    <section className="section">
                        <figure className="figure">
                            <img src={IlustrationPilihDesainmu} alt="Ilustration" />
                        </figure>
                        <header>Pilih Desainmu</header>
                        <section>Pilih desain yang sesuai dengan yang kamu harapkan, ciptakan ruang ternyamanmu</section>
                    </section>
                    <section className="section">
                        <figure className="figure">
                            <img src={IlustrationKonsultasi} alt="Ilustration" />
                        </figure>
                        <header>Konsultasi</header>
                        <section>Kamu bisa berkonsultasi dengan desainer ahli dalam merancang desain interior impian</section>
                    </section>
                    <section className="section">
                        <figure className="figure">
                            <img src={IlustrationWujudkan} alt="Ilustration" />
                        </figure>
                        <header>Wujudkan</header>
                        <section>Wujudkan impian ruangan yang kamu inginkan dan nikmatilah hasilnya</section>
                    </section>
                </article>
            </main>
            <main className="landingPage-mainThree">
                <article className="landingPage-mainThree-articleOne">
                    <header className="header">Produk Interumah</header>
                    <nav className="ProductMenu">
                        <ul>
                            <li><Button size="sm" button="btnProduct">Semua Kategori</Button></li>
                            {categoriesData.length > 0 ? categoriesData.map(data => (
                                <li key={data.id}><Button size="sm" button="btnProduct" type="secondary" name={data.id} onClick={handleButtonCategory}>{data.name}</Button></li>
                            )) : null}
                        </ul>
                    </nav>
                </article>
                <article className="landingPage-mainThree-articleTwo">
                    <ProductCard data={designsData} />
                </article>
                <article className="landingPage-mainThree-articleThree">
                    <Button type="colorfull" fontSize="lg">Selengkapnya</Button>
                </article>
            </main>
            <main className="landingPage-mainFour">
                <header className="landingPage-mainFour-header">Interumah Selalu Punya Cerita</header>
                <article className="landingPage-mainFour-articleOne">
                    <section className="story">
                        <StoryCard
                            img={imgStory1}
                            title="Interumah bekerjasama dengan mahasiswa UI"
                            date="6 Februari 2022" />
                    </section>
                    <section className="story">
                        <StoryCard
                            img={imgStory2}
                            title="Interumah memudahkan pesanan lewat mobile"
                            date="6 Februari 2022" />
                    </section>
                    <section className="story">
                        <StoryCard
                            img={imgStory3}
                            title="1000 Unit teratasi dengan Interumah"
                            date="6 Februari 2022" />
                    </section>
                    <section className="story">
                        <StoryCard
                            img={imgStory4}
                            title="Banyak membantu freelancer untuk kerja"
                            date="6 Februari 2022" />
                    </section>
                    <section className="story">
                        <StoryCard
                            img={imgStory5}
                            title="Ruang tunggu RS tidak mau kalah menarik"
                            date="6 Februari 2022" />
                    </section>
                    <section className="story">
                        <StoryCard
                            img={imgStory1}
                            title="Interumah bekerjasama dengan mahasiswa UI"
                            date="6 Februari 2022" />
                    </section>
                </article>
                <footer className="landingPage-mainFour-footer">
                    <hr className="hrOne" />
                    <figure className="logo">
                        <img src={LogoFooter} alt="Logo" />
                    </figure>
                    <article className="articleMenuFooter">
                        <section className="section">
                            <header className="header">
                                Perusahaan
                            </header>
                            <ul>
                                <li><a href="#Tentang">Tentang</a></li>
                                <li><a href="#Produk">Produk</a></li>
                                <li><a href="#Blog">Blog</a></li>
                            </ul>
                        </section>
                        <section className="section">
                            <header className="header">
                                Kebijakan
                            </header>
                            <ul>
                                <li><a href="#Syarat">Syarat dan Ketentuan</a></li>
                                <li><a href="#Kebijakan">Kebijakan Interumah</a></li>
                            </ul>
                        </section>
                        <section className="section">
                            <header className="header">
                                Hubungi Kami
                            </header>
                            <ul>
                                <li><a href="#Bantuan">Bantuan</a></li>
                                <li><a href="#Lokasi">Lokasi</a></li>
                            </ul>
                        </section>
                        <section className="section">
                            <header className="header">
                                Perusahaan
                            </header>
                            <figure className="figure">
                                <a href="www.facebook.com"><IconFacebook /></a>
                                <a href="www.instagram.com"><IconInstagram /></a>
                                <a href="www.tiktok.com"><IconTiktok /></a>
                                <a href="www.youtube.com"><IconYoutube /></a>
                            </figure>
                            <header className="header">
                                Unduh Aplikasi
                            </header>
                            <figure className="figure">
                                <a href="www.playstore.com"><IconPlayStore /></a>
                                <a href="www.appstore.com"><IconAppStore /></a>
                            </figure>
                        </section>
                    </article>
                    <hr />
                    <article className="articleCopyRight">
                        © 2022 Interumah | Interumah adalah merek milik PT Media Kreasi Abadi. Terdaftar pada Direktorat Jendral Kekayaan Intelektual Republik Indonesia.
                    </article>
                </footer>
            </main>
        </main>
    )
}

export default LandingPage