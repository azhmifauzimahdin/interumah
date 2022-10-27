import { useContext } from "react"
import ProfileContext from "../contexts/Profile.context"

const useProfile = () => {
    const { profile, setProfile } = useContext(ProfileContext)
    return { profile, setProfile }
}

export default useProfile