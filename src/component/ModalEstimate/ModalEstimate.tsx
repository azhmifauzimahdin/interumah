import React from "react";
import { IconDownArrow } from "../Icon";
import "./ModalEstimate.css";

interface ModalEstimateProps {
    title?: string
    visible: boolean
    onClose: () => void
    onStay: (e: any) => void
    children?: React.ReactNode
}

const ModalEstimate: React.FC<ModalEstimateProps> = props => {
    const { title, children, onClose, visible, onStay } = props
    if (!visible) return <></>

    return (
        <>
            <main className="modalEstimate-wrapper" onClick={onClose}>
                <article className="modalEstimate-box" onClick={onStay}>
                    <article className="modalEstimate-box-header">
                        <section className="modalEstimate-box-header-section">
                            <span className="title">{title}</span>
                        </section>
                        <section className="modalEstimate-box-header-section">
                            <section className="closeBtn" onClick={onClose}><IconDownArrow /></section>
                        </section>
                    </article>
                    <article className="modalEstimate-box-content">
                        {children}
                    </article>
                </article>
            </main>
        </>
    )
}

export default ModalEstimate;