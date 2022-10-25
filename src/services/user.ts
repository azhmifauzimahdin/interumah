import { AxiosResponse } from "axios"
import { User } from "../types/User"
import { httpRequest } from "./api"

export const getLoginUser = async (): Promise<AxiosResponse<User>> => {
    return await httpRequest.get('/users/1')
}