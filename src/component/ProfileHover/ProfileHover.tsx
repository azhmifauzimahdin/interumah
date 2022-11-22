import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./ProfileHover.css"

interface ProfileHoverProps<T = any> {
    visible: boolean
    data: T[]
    onClick?: (key: any) => void
    onClose: () => void
}

const ProfileHover: React.FC<ProfileHoverProps> = props => {
    const navigate = useNavigate()
    const { visible, onClose } = props
    const [menuProfile, setMenuProfile] = useState<string[]>([])

    const initiateMenuProfile = (data: string[]) => {
        setMenuProfile(data)
    }

    useEffect(() => {
        if (props.data.length === 0) return
        initiateMenuProfile([...props.data])
    }, [props.data])

    const coba = (data: string) => {
        const newData = data.replace(/ /g, '').toLowerCase()
        navigate(`/${newData}`)
    }

    if (!visible) return <></>

    return (
        <main className="main-ProfileHover" onClick={onClose}>
            <div className="container-ProfileHover">
                <div className="content-ProfileHover">
                    <div className="triangle-ProfileHover">
                    </div>
                    <ul>
                        {menuProfile.length > 0 ? menuProfile.map((data, index) => {
                            return (
                                <li key={index} onClick={() => coba(data)}>{data}</li>
                            )
                        }) : null}
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default ProfileHover