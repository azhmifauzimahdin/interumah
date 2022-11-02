import { AxiosResponse } from "axios"
import { ProfileResponse, UsersResponse } from "../types/User"
import { httpRequest } from "./api"

export const getUsers = async (): Promise<AxiosResponse<UsersResponse>> => {
    return await httpRequest.get('/users')
}

export const getProfile = async (id: number): Promise<AxiosResponse<ProfileResponse>> => {
    return await httpRequest.get(`/users/${id}`)
}