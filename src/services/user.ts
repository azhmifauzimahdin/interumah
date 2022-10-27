import { AxiosResponse } from "axios"
import { Profile } from "../types/User"
import { httpRequest } from "./api"

export const getProfile = async (): Promise<AxiosResponse<Profile>> => {
    return await httpRequest.get('/users/1')
}