import React, { useEffect, useState } from "react"
import "./DropDownPayment.css"

const IconDrop = () => {
    return (
        <svg width="30" height="30" viewBox="0 0 52 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50.3092 7.67131C51.777 6.26269 51.777 3.91544 50.3092 2.50683L49.1304 1.37554C47.7467 0.0476383 45.5622 0.0464488 44.177 1.37284L28.4753 16.4084C27.0912 17.7338 24.9088 17.7338 23.5247 16.4084L7.82297 1.37284C6.43781 0.0464468 4.25333 0.047639 2.86962 1.37554L1.69077 2.50683C0.222958 3.91544 0.222958 6.2627 1.69078 7.67131L23.5219 28.6219C24.9067 29.9508 27.0933 29.9508 28.4781 28.6219L50.3092 7.67131Z" fill="#101B94" />
        </svg>
    )
}

interface DropDownPaymentProps<T = any> {
    option: T[]
    imageDefault: string
    bankDefault: string
}

const Dropdown: React.FC<DropDownPaymentProps> = props => {
    const { option, imageDefault, bankDefault } = props
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState<any>(null)

    useEffect(() => {
        const handler = () => setShowMenu(false)

        window.addEventListener("click", handler)
        return () => {
            window.removeEventListener("click", handler)
        }
    })

    const handleInputClick = (e: any) => {
        e.stopPropagation()
        setShowMenu(!showMenu)
    }

    const getBank = () => {
        if (selectedValue) {
            return selectedValue.bank
        }
        return bankDefault
    }
    const getImage = () => {
        if (selectedValue) {
            return selectedValue.image
        }
        return imageDefault
    }

    const onItemClick = (option: any) => {
        setSelectedValue(option)
    }

    const isSelected = (option: any) => {
        if (!selectedValue) {
            return false
        }
        return selectedValue.value === option.value
    }

    return (
        <>
            <div className="dropdown-payment-container">
                <div className="dropdown-payment-input" onClick={handleInputClick}>
                    <section className="dropdown-payment-item-bgimage">
                        <img src={getImage()} alt="bank" />
                    </section>
                    <section className="dropdown-payment-item-desc">
                        Bank {getBank()}
                        <section className="item-desc-name">
                            a.n Interumah Jaya
                        </section>
                        <section className="item-desc-no">
                            3345-431-5123
                        </section>
                    </section>
                    <div className="dropdown-payment-tool">
                        <IconDrop />
                    </div>
                </div>
            </div>
            {showMenu && (
                <div className="dropdown-payment-menu">
                    {option?.map((option) => {
                        return (
                            <div
                                key={option.value}
                                className={`dropdown-payment-item`}
                                onClick={() => onItemClick(option)}
                            >
                                <section className="dropdown-payment-item-bgimage">
                                    <img src={option.image} alt="bank" />
                                </section>
                                <section className="dropdown-payment-item-desc">
                                    Bank {option.bank}
                                    <section className="item-desc-name">
                                        a.n Interumah Jaya
                                    </section>
                                    <section className="item-desc-no">
                                        3345-431-5123
                                    </section>
                                </section>
                                <section className="icondot" >
                                    <section className={`${isSelected(option) && "selectede"}`} />
                                </section>
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    );
};

export default Dropdown;