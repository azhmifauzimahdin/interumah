import React from "react";
import "./ModalBlank.css";

interface ModalProps {
    visible: boolean
    children?: React.ReactNode
    onClose: (e: any) => void
}

const Modal: React.FC<ModalProps> = props => {
    const { children, visible, onClose } = props
    if (!visible) return <></>

    return (
        <div className="modal-wrapper" onClick={onClose}>
            <div className="modal-box">
                <div className="modal-box-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal