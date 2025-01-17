import React from "react"
import "./Profile.css"

export interface ProfileProps {
    image: string
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xxl'
}
const Profile: React.FC<ProfileProps> = props => {
    const { image } = props
    const size = props.size || 'md'

    return (
        <div className={`Profile profile-size-${size}`}>
            {image && <img src={image} alt="profile" className="profileImage" />}
        </div>

    )
}

export default Profile