import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FavoriteService } from "../../services"
import Button from "../Button/Button"
import { IconFavoriteBorder, IconLocation, IconPrice } from "../Icon"
import "./ProductCard.css"

interface ProductCardProps<T = any> {
    data: T[]
}

const ProductCard: React.FC<ProductCardProps> = props => {
    const navigate = useNavigate()
    const [designData, setDesignData] = useState<any[]>([])

    // ------- Inititate Design ------
    const initiateDesign = (data: any[]) => {
        setDesignData(data)
    }

    // ------- Handle Navigate Detail Design -------
    const detailDesign = (id: any) => {
        navigate(`/detail_desain?desain=${id}`)
    }

    // ------ Handle Click Favorite ------
    const handleFavorite = async (id: number) => {
        try {
            await FavoriteService.deleteFavoriteDesign(id)
            window.location.reload()
        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect(() => {
        if (props.data.length === 0) return
        initiateDesign([...props.data])
    }, [props.data])

    return (
        <>
            {designData.length > 0 ? designData.map(data => {
                return (
                    <article className="productCard" key={data.id}>
                        <figure className="productCard-imgProduct">
                            <img src={`http://${data.imageUrl || data.design.imageUrl}`} alt="Classic" />
                        </figure>
                        <article className="productCard-article">
                            <header className="productCard-title">{data.title || data.design.title}</header>
                            <section className="productCard-company">{data?.design?.designerName || data.designer.name}</section>
                            <section className="productCard-address">
                                <span className="icon"><IconLocation /></span>{data.location || data.design.price}
                            </section>
                            <section className="productCard-price">
                                <span className="icon"><IconPrice /></span>{data.price || data.design.price}
                            </section>
                            <section className="productCard-optionProduct">
                                <section className="btnFavorit"><IconFavoriteBorder onClick={() => handleFavorite(data.design.id)} /></section>
                                <section className="btnDetail"><Button fontWeight="normal" size="sm" fontSize="sm" onClick={() => detailDesign(data.id)}>Lihat detail</Button></section>
                            </section>
                        </article>
                    </article>
                )
            }) : null
            }
        </>
    )
}

export default ProductCard