import React, { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { IlustrationOk } from "../../../assets"
import { Button, LoadingScreen, ModalBlank, StarRating } from "../../../component"
import { IconCloudUpload, IconProfile, IconSend } from "../../../component/Icon"
import { DesignService, OrderService, ReviewService } from "../../../services"
import { Design } from "../../../types/Design"
import { OrderData } from "../../../types/Order"
import { RequestAddReview } from "../../../types/Review"
import "./AddReview.css"

const AddReview: React.FC = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)
    const [imagesDesign, setImagesDesign] = useState([] as any)
    const [imageURLSDesign, setImageURLsDesign] = useState([])
    const [imagesDesigner, setImagesDesigner] = useState([] as any)
    const [imageURLSDesigner, setImageURLsDesigner] = useState([])
    const [orderData, setOrderData] = useState<OrderData>()
    const [designData, setDesignData] = useState<Design>()

    //------- currency format -------
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    })
    //------ Get param ------
    let [searchParams] = useSearchParams()
    const id = parseInt(searchParams.get("id") as string)

    //------ Get Order By ID -------
    useEffect(() => {
        window.scrollTo(0, 0)
        setLoading(true)
        OrderService.getOrderByID(id)
            .then(response => setOrderData(response.data.data))
            .catch(error => console.log('error', error))
    }, [id])


    // //------ Get Design By ID -------
    useEffect(() => {
        if (orderData?.design.id) {
            DesignService.getDesignByID(orderData?.design.id)
                .then(response => {
                    setDesignData(response.data.data)
                    setLoading(false)
                })
                .catch(error => {
                    console.log('error', error)
                    setLoading(false)
                })
        }
    }, [orderData?.design.id])

    //------ Navigate Detail Design -------
    const navigateDetailDesign = (id: number) => {
        navigate(`/detail_desain?desain=${id}`)
    }

    //------ Handle Request -------
    const [ratingDesain, setRatingDesain] = useState<number>(0)
    const [ratingDesainer, setRatingDesainer] = useState<number>(0)
    const [designComments, setdesignComments] = useState<string>('')
    const [designerComments, setdesignerComments] = useState<string>('')


    //------ Review Design ------
    const reviewDesign = async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true)
        try {
            e.preventDefault()
            let formData = new FormData()
            formData.append('designRating', ratingDesain as any)
            formData.append('designerRating', ratingDesainer as any)
            formData.append('designComments', designComments)
            formData.append('designerComments', designerComments)
            const inputObject = Object.fromEntries(formData)
            await ReviewService.addReview(designData?.id as number, inputObject as any as RequestAddReview)
            setLoading(false)
            toggleModal()
        } catch (error) {
            console.log('error', error);
            setLoading(false)
        }
    }

    //------ Rating ------
    const rateDesain = (rating: number) => {
        setRatingDesain(rating)
    }
    const rateDesainer = (rating: number) => {
        setRatingDesainer(rating)
    }
    //----- Image Preview ------
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

    //------ Modal Update Success-------
    const [showModal, setShowModal] = useState<boolean>(false)

    const toggleModal = () => {
        setShowModal(prevState => !prevState)
    }
    const onStayModal = (e: any) => {
        e.stopPropagation()
    }

    const navigateOrder = () => {
        navigate('/pesananku')
    }

    return (
        <>
            <main className="userAddReview-wrapper" >
                <header className="userAddReview-header">Detail Pesanan</header>
                <section className="userAddReview-box">
                    <section className="detail-header">
                        <section className="detail-company">
                            <IconProfile size="xs" image={`http://${designData?.designer.imageUrl}`} /><span className="text">{designData?.designer.name}</span>
                        </section>
                        <section className="detail-show" onClick={() => navigateDetailDesign(designData?.id as number)}>
                            Lihat Detail
                        </section>
                    </section>
                    <section className="detail-content">
                        <figure className="detail-image">
                            <img src={`http://${designData?.imageUrl}`} alt="desain" />
                        </figure>
                        <section className="detail-desc">
                            {designData?.title}
                            <section className="detail-desc-size">Ukuran 3 x 9 meter</section>
                        </section>
                    </section>
                    <section className="detail-footer">
                        Total Harga:<span className="detail-footer-price"> {formatter.format(designData?.price as any)}</span>
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
                                <StarRating rate={rateDesain} />
                            </section>
                            <textarea className="userAddReview-textArea" placeholder="Tambahkan deskripsi terkait penilain desain....." name="designComments" onChange={(e) => setdesignComments(e.target.value)} />
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
                                <StarRating rate={rateDesainer} />
                            </section>
                            <textarea className="userAddReview-textArea" placeholder="Tambahkan deskripsi terkait penilain desainer....." name="designerComments" onChange={(e) => setdesignerComments(e.target.value)} />
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
                    <form onSubmit={reviewDesign}>
                        <section className="userAddReview-btn">
                            <Button type="secondary"><IconSend className="iconBtn" />KIRIM PENILAIAN</Button>
                        </section>
                    </form>
                </section>
                {loading && <LoadingScreen />}
            </main >
            <ModalBlank
                visible={showModal}
                onClose={toggleModal}
                OnStay={onStayModal}
            >
                <section className="modalAddReview-title">
                    Berhasil Menambahkan Penilaian
                </section>
                <section className="modalAddReview-ilustration">
                    <img src={IlustrationOk} alt="Ilustration Successfull" className="imgIlustrationAddReview" />
                </section>
                <section className="modalAddReview-btn">
                    <Button onClick={navigateOrder}>Pesanan</Button>
                </section>
            </ModalBlank>
        </>
    )
}

export default AddReview