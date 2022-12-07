import React, { useEffect, useState } from "react"
import { imgKategori2 } from "../../assets/dummy"
import Button from "../Button/Button"
import "./CategoryMenu.css"

interface CategoryMenuProps<T = any> {
    category?: string
    icon?: string
    menu: T[]
}
const CategoryMenu: React.FC<CategoryMenuProps> = props => {
    const [menuData, setMenuData] = useState<any[]>([])

    const initiateMenu = (data: any[]) => {
        setMenuData(data)
    }

    useEffect(() => {
        if (props.menu.length === 0) return
        initiateMenu([...props.menu])
    }, [props.menu])
    return (
        <section className="categoryMenu">
            <section className="categoryMenu-btn">
                <Button type="secondary" style={{ gap: '1vw' }}><img src={imgKategori2} alt="kategori" className="img-icon" />Peribadatan</Button>
            </section>
            <section className="categoryMenu-menu">
                {menuData.length > 0 ? menuData.map((data, index) => {
                    return (
                        <section className="categoryMenu-menu-option" key={index}>{data.title}</section>
                    )
                }) : null
                }
            </section>
        </section>
    )
}

export default CategoryMenu