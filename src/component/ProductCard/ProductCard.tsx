import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { IlustrationOk } from "../../assets"
import { FavoriteService } from "../../services"
import { Favorite } from "../../types/Favorite"
import Button from "../Button/Button"
import { IconFavoriteBorder, IconLocation, IconPrice } from "../Icon"
import ModalBlank from "../ModalBlank/ModalBlank"
import "./ProductCard.css"

interface ProductCardProps<T = any> {
    data: T[]
}

const ProductCard: React.FC<ProductCardProps> = props => {
    const navigate = useNavigate()
    const [designData, setDesignData] = useState<any[]>([])
    const [designFavorite, setDesignFavorite] = useState<Favorite[]>([])

    //------ Get token ------
    const token = localStorage.getItem("token")

    // ------- Inititate Design ------
    const initiateDesign = (data: any[]) => {
        setDesignData(data)
    }

    // ------- Handle Navigate Detail Design -------
    const detailDesign = (id: any) => {
        if (!token) {
            toggleModal()
        } else {
            navigate(`/detail_desain?desain=${id}`)
        }
    }

    // ------ Handle Click Favorite ------
    const handleFavorite = async (id: number) => {
        if (!token) {
            toggleModal()
        } else {
            try {
                await FavoriteService.FavoriteDesign(id)
                window.location.reload()
            } catch (error) {
                console.log("error", error)
            }
        }
    }

    //------ Modal Message Login-------
    const [showModal, setShowModal] = useState<boolean>(false)

    const toggleModal = () => {
        setShowModal(prevState => !prevState)
    }
    const onStayModal = (e: any) => {
        e.stopPropagation()
    }
    const navigateLogin = () => {
        navigate('/login')
    }

    useEffect(() => {
        if (props.data.length === 0) return
        initiateDesign([...props.data])

        // ------ Get favorite designs ------
        if (token) {
            FavoriteService.getAllDesignFavorite()
                .then(response => setDesignFavorite(response.data.data))
                .catch(error => console.log("error", error))
        }
    }, [props.data, token])

    //------- currency format -------
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    })


    return (
        <>
            {designData.length > 0 ? designData.map(data => {
                let fav: boolean = false
                designFavorite.map(favorite => favorite.design.id === data.id || data?.design?.id ? fav = true : null)
                return (
                    <article className="productCard" key={data?.design?.id || data.id}>
                        <figure className="productCard-imgProduct">
                            <img src={`http://${data.imageUrl || data.design.imageUrl}`} alt="Classic" />
                        </figure>
                        <article className="productCard-article">
                            <header className="productCard-title">{data.title || data.design.title}</header>
                            <section className="productCard-company">{data?.design?.designerName || data.designer.name}</section>
                            <section className="productCard-address">
                                <span className="icon"><IconLocation /></span>{data.location || data.design.location}
                            </section>
                            <section className="productCard-price">
                                <span className="icon"><IconPrice /></span>{formatter.format(data.price || data.design.price)}
                            </section>
                            <section className="productCard-optionProduct">
                                <section className="btnFavorit"><IconFavoriteBorder onClick={() => handleFavorite(data?.design?.id || data.id)} active={fav} /></section>
                                <section className="btnDetail"><Button fontWeight="normal" size="sm" fontSize="sm" onClick={() => detailDesign(data?.design?.id || data.id)}>Lihat detail</Button></section>
                            </section>
                        </article>
                    </article>
                )
            }) : null
            }
            <ModalBlank
                visible={showModal}
                onClose={toggleModal}
                OnStay={onStayModal}
            >
                <section className="modalProductCard-title">
                    Anda Harus login terlebih dahulu
                </section>
                <section className="modalProductCard-ilustration">
                    <img src={IlustrationOk} alt="Ilustration Successfull Payment" className="imgIlustrationProductCard" />
                </section>
                <section className="modalProductCard-btn">
                    <Button onClick={navigateLogin}>Login</Button>
                </section>

            </ModalBlank>
        </>
    )
}

export default ProductCard