import { AxiosResponse } from "axios"
import { ProfileResponse } from "../types/User"
import { httpRequest } from "./api"

export const getProfile = async (): Promise<AxiosResponse<ProfileResponse>> => {
    return await httpRequest.get('/users/12')
}