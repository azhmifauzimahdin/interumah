import React from "react";
import "./ModalBlank.css";

interface ModalProps {
    visible: boolean
    children?: React.ReactNode
    onClose: () => void
    OnStay: (e: any) => void
}

const Modal: React.FC<ModalProps> = props => {
    const { children, visible, onClose, OnStay } = props
    if (!visible) return <></>

    return (
        <div className="modal-wrapper" onClick={onClose}>
            <div className="modal-box" onClick={OnStay}>
                <div className="modal-box-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal