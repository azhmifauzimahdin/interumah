import React from "react"
import "./Profile.css"

export interface ProfileProps {
    image: string
    size?: 'sm' | 'md'
}
const Profile: React.FC<ProfileProps> = props => {
    const { image } = props
    const size = props.size || 'md'

    return (
        <div className={`Profile profile-size-${size}`}>
            <img src={image} alt="profile" className="profileImage" />
        </div>

    )
}

export default Profile