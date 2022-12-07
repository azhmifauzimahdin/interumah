import React, { useEffect, useState } from "react"
import { imgClassic1, imgProfile1 } from "../../../assets/dummy"
import { Button, StarRating } from "../../../component"
import { IconCloudUpload, IconProfile, IconSend } from "../../../component/Icon"
import "./AddReview.css"

const AddReview: React.FC = () => {
    const [imagesDesign, setImagesDesign] = useState([] as any);
    const [imageURLSDesign, setImageURLsDesign] = useState([]);
    const [imagesDesigner, setImagesDesigner] = useState([] as any);
    const [imageURLSDesigner, setImageURLsDesigner] = useState([]);

    useEffect(() => {
        const newImageUrlsDesign: any = []
        imagesDesign.forEach((image: any) => newImageUrlsDesign.push(URL.createObjectURL(image)))
        setImageURLsDesign(newImageUrlsDesign)
        const newImageUrlsDesigner: any = []
        imagesDesigner.forEach((image: any) => newImageUrlsDesigner.push(URL.createObjectURL(image)))
        setImageURLsDesigner(newImageUrlsDesigner)
    }, [imagesDesign, imagesDesigner]);

    function onImageChangeDesign(e: any) {
        setImagesDesign([...e.target.files])
    }
    function onImageChangeDesigner(e: any) {
        setImagesDesigner([...e.target.files])
    }
    return (
        <main className="userAddReview-wrapper">
            <header className="userAddReview-header">Detail Pesanan</header>
            <section className="userAddReview-box">
                <section className="detail-header">
                    <section className="detail-company">
                        <IconProfile size="xs" image={imgProfile1} /><span className="text">Sejahter Jaya Gr.</span>
                    </section>
                    <section className="detail-show">
                        Lihat Detail
                    </section>
                </section>
                <section className="detail-content">
                    <figure className="detail-image">
                        <img src={imgClassic1} alt="desain" />
                    </figure>
                    <section className="detail-desc">
                        Kamar Tidur Modern Estetik
                        <section className="detail-desc-size">Ukuran 3 x 9 meter</section>
                    </section>
                </section>
                <section className="detail-footer">
                    Total Harga:<span className="detail-footer-price"> Rp.10.000.000</span>
                </section>
            </section>
            <section className="userAddReview-boxOne">
                <section className="userAddReview-headerbox">
                    <section className="userAddReview-headerbox-title">Kualitas Desain</section>
                    <section className="userAddReview-headerbox-title">Kualitas Desainer</section>
                </section>
                <section className="userAddReview-content">
                    <section className="userAddReview-content-box">
                        <section className="userAddReview-content-start">
                            <StarRating />
                        </section>
                        <textarea className="userAddReview-textArea" placeholder="Tambahkan deskripsi terkait penilain produk....." />
                        <label className="userAddReview-buttonUpload">
                            <IconCloudUpload className="icon-cloudUpload" />Tambahkan Foto atau Video
                            <input type="file" multiple accept="image/*" onChange={onImageChangeDesign} style={{ display: "none" }} />
                        </label>
                        <section className="userAddReview-imgWrapper">
                            {imageURLSDesign.map((imageSrc) => (
                                <section className="userAddReview-imgBox">
                                    <img src={imageSrc} alt="not fount" className="" />
                                </section>
                            ))}
                        </section>
                    </section>
                    <section className="userAddReview-content-box">
                        <section className="userAddReview-content-start">
                            <StarRating />
                        </section>
                        <textarea className="userAddReview-textArea" placeholder="Tambahkan deskripsi terkait penilain produk....." />
                        <label className="userAddReview-buttonUpload">
                            <IconCloudUpload className="icon-cloudUpload" />Tambahkan Foto atau Video
                            <input type="file" multiple accept="image/*" onChange={onImageChangeDesigner} style={{ display: "none" }} />
                        </label>
                        <section className="userAddReview-imgWrapper">
                            {imageURLSDesigner.map((imageSrc) => (
                                <section className="userAddReview-imgBox">
                                    <img src={imageSrc} alt="not fount" className="" />
                                </section>
                            ))}
                        </section>
                    </section>
                </section>
                <section className="userAddReview-btn">
                    <Button type="secondary"><IconSend className="iconBtn" />KIRIM PENILAIAN</Button>
                </section>
            </section>
        </main>
    )
}

export default AddReview