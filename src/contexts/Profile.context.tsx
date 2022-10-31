import React from "react"
import { Profile } from "../types/User"

const defaultValue: Profile = {
    name: '',
    phone: '',
    age: '',
    address: '',
    job: '',
    email: '',
    role: ''
}

const ProfileContext = React.createContext({
    profile: defaultValue,
    setProfile: (newProfile: Profile) => { }
})

export default ProfileContext