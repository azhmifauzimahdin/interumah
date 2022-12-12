import React from "react"
import { CategoryMenu } from "../../../component"
import "./AllCategories.css"

const UserAllCategories: React.FC = () => {
    window.scrollTo(0, 0)
    const menuCategoryOne = [
        {
            title: "Ruang Tunggu PDAM"
        },
        {
            title: "Mall dan Store"
        },
        {
            title: "Restoran"
        },
    ]
    return (
        <main className="userAllCategories">
            <article className="userAllCategories-box">
                <CategoryMenu menu={menuCategoryOne} />
                <CategoryMenu menu={menuCategoryOne} />
                <CategoryMenu menu={menuCategoryOne} />
                <CategoryMenu menu={menuCategoryOne} />
                <CategoryMenu menu={menuCategoryOne} />
                <CategoryMenu menu={menuCategoryOne} />
            </article>
        </main>
    )
}

export default UserAllCategories