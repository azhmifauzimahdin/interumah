import React, { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { IlustrationAtmMachine } from "../../../../assets"
import { Button, ModalBlank, ReviewBox } from "../../../../component"
import { IconChat, IconLocation, IconProfile, IconStart } from "../../../../component/Icon"
import { BudgetService, DesignService } from "../../../../services"
import { BudgetPlan } from "../../../../types/Budget"
import { Design } from "../../../../types/Design"
import "./DetailDesain.css"

const UserDetailDesain: React.FC = () => {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState<boolean>(false)
    const [designData, setDesignData] = useState<Design>()

    //------ Get Params ------
    let [searchParams] = useSearchParams()
    const desain = parseInt(searchParams.get("desain") as string)

    //------ Get Spesicif Design ------
    const getSpecificDesign = async (id: any) => {
        try {
            const response = await DesignService.getDesignByID(id)
            setDesignData(response.data.data)
        } catch (error) {
            console.log('error', error)
        }
    }

    //------ Modal Confirm Payment ------
    const toggleModal = () => {
        setShowModal(prevState => !prevState)
    }
    const onStayModal = (e: any) => {
        e.stopPropagation()
    }
    const orderDesign = async (id: any) => {
        navigate(`/pembayaran?idDesign=${id}`)
    }

    //------ Navigate Detail Designer ------
    const navigateDesigner = (id: any) => {
        navigate(`/desainer?id=${id}`)
    }

    const [budgetPlan, setBudget] = useState<BudgetPlan>()
    useEffect(() => {
        getSpecificDesign(desain)
        //------- Get Budget Plan By ID -------
        BudgetService.getBudgetPlanByID(desain)
            .then(response => setBudget(response.data.data))
            .catch(error => console.log('error', error))

    }, [desain])
    console.log("budgetPlan", budgetPlan)
    return (
        <>
            <main className="userDetailDesain-container">
                <article className="userDetailDesain-detail">
                    <figure className="userDetailDesain-detail-figure">
                        <img src={`http://${designData?.imageUrl}`} alt="detail desain" />
                    </figure>
                    <section className="userDetailDesain-detail-content">
                        <header className="userDetailDesain-detail-content-header">{designData?.title}</header>
                        <section className="userDetailDesain-detail-content-price">
                            Rp. {designData?.price}
                            <section className="sold-box">5 Terjual {desain}</section>
                        </section>
                        <section className="userDetailDesain-detail-content-desc">
                            {designData?.description}
                        </section>
                        <section className="userDetailDesain-detail-content-descTwo"><span className="icon-desc"><IconLocation size="lg" /></span>{designData?.location}</section>
                        <section className="userDetailDesain-detail-content-descTwo"><span className="icon-desc"><IconStart size="lg" /></span>4.9 (5 Ulasan)</section>
                        <section className="userDetailDesain-detail-footer">
                            <section className="userDetailDesain-detail-footer-btn"><Button type="secondary" className="btn"><IconChat className="icon-chat" />Hubungi</Button></section>
                            <section className="userDetailDesain-detail-footer-btn"><Button onClick={toggleModal}>Pesan Desain</Button></section>
                        </section>
                    </section>
                </article>
                <article className="userDetailDesain-box">
                    <header className="userDetailDesain-box-header">Spesifikasi Desain</header>
                    <section className="userDetailDesain-specification-desc">
                        <section className="header-specification">Persiapan</section>
                        {budgetPlan?.persiapan.map((data, index) => {
                            return (
                                <section className="wrapper-specification" key={index}>
                                    <section className="title-specification">{data.name}</section><section className="value-specification">: {data.volume} M</section>
                                    <section className="title-specification" /><section className="value-specification">: Rp. {data.cost} /Meter</section>
                                </section>
                            )
                        })}
                        <section className="header-specification">Pondasi</section>
                        {budgetPlan?.pondasi.map((data, index) => {
                            return (
                                <section className="wrapper-specification" key={index}>
                                    <section className="title-specification">{data.name}</section><section className="value-specification">: {data.volume} M</section>
                                    <section className="title-specification" /><section className="value-specification">: Rp. {data.cost} /Meter</section>
                                </section>
                            )
                        })}
                    </section>
                    {/* <section className="userDetailDesain-specification-desc">
                        Deskripsi :<br />
                        {designData?.description}
                    </section> */}
                </article>
                <article className="userDetailDesain-desainer">
                    <figure className="userDetailDesain-desainer-image"><IconProfile size="xxl" image={`http://${designData?.designer.imageUrl}`} /></figure>
                    <section className="userDetailDesain-desainer-desc">
                        <section className="company">{designData?.designer.name}</section>
                        <section className="rating"><IconStart size="lg" /><span className="ratingText" >4.9  (5 Ulasan)</span></section>
                        <section className="location">{designData?.location}</section>
                    </section>
                    <section className="userDetailDesain-desainer-btn">
                        <Button onClick={() => navigateDesigner(designData?.designer.id)}>Kunjungi</Button>
                    </section>
                </article>
                <article className="userDetailDesain-boxReview">
                    <ReviewBox />
                </article>
            </main>
            <ModalBlank
                visible={showModal}
                onClose={toggleModal}
                OnStay={onStayModal}
            >
                <section className="modalConfirmPayment-title">
                    Ingin Melanjutkan ke Pembayaran?
                </section>
                <section className="modalConfirmPayment-ilustration">
                    <img src={IlustrationAtmMachine} alt="Ilustration Register Success" className="imgIlustrationConfirmPayment" />
                </section>
                <section className="modalConfirmPayment-option">
                    <section className="modalConfirmPayment-option-btn"><Button type="secondary" onClick={toggleModal}>Batal</Button></section>
                    <section className="modalConfirmPayment-option-btn"><Button onClick={() => orderDesign(desain)}>Bayar</Button></section>
                </section>

            </ModalBlank>
        </>
    )
}

export default UserDetailDesain