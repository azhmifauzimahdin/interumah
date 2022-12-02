import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconDownArrow } from "../../Icon";
import "./DropdownMenu.css";

interface DropdownProps<T = any> {
    icon: any
    menu: string
    basePath: string
    option?: T[]
    isOpen: boolean
    onClick?: () => void
}

const DropdownMenu: React.FC<DropdownProps> = props => {
    const { icon, menu, basePath, option, isOpen, onClick } = props
    const [showOption, setshowOption] = useState(false)

    const handleInputClick = (e: any) => {
        if (onClick) onClick()
        if (option) e.preventDefault()
        e.stopPropagation()
        setshowOption(!showOption)
    }

    console.log("showOption", showOption)

    return (
        <>
            <NavLink to={basePath} onClick={handleInputClick} className={({ isActive }) => isActive ? 'dropdownMenu-maincourse activeDrop' : 'dropdownMenu-maincourse'} style={{ justifyContent: isOpen ? "space-between" : "center" }} >
                <section className="dropdownMenu-maincourse-menu">
                    <div className="dropdownMenu-maincourse-iconmenu">{icon}</div>
                    <div className="dropdownMenu-maincourse-name" style={{ display: isOpen ? "block" : "none" }}>{menu}</div>
                </section>
                {option ?
                    <section className="dropdownMenu-maincourse-tool" style={{ display: isOpen ? "block" : "none", transform: showOption ? "rotateX(180deg)" : "rotateX(0)" }}>
                        <IconDownArrow size="sm" color="black" className="iconDownArrow" />
                    </section>
                    : null}
            </NavLink>
            {showOption && (
                <section className="dropdownMenu-listoption" style={{ height: showOption ? "100%" : "0px", display: isOpen ? "block" : "none" }}>
                    {option ? option.map((data, index) => {
                        return (
                            <NavLink to={data.path} key={index} className={({ isActive }) => isActive ? 'dropdownMenu-option activeOption' : 'dropdownMenu-option'} >
                                <section className="dropdownMenu-point"><section className="fillPoint" /></section>
                                <section className="dropdownMenu-name">{data.name}</section>
                            </NavLink>
                        )
                    })
                        : null}
                </section>
            )}
        </>
    );
};

export default DropdownMenu;