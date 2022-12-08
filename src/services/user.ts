import { AxiosResponse } from "axios"
import { UserResponse, UsersResponse } from "../types/User"
import { httpRequest } from "./api"

export const getUsers = async (): Promise<AxiosResponse<UsersResponse>> => {
    return await httpRequest.get('/users')
}

export const getUserByID = async (id: number): Promise<AxiosResponse<UserResponse>> => {
    return await httpRequest.get(`/users/${id}`)
}