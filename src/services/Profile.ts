import { AxiosResponse } from "axios";
import { RequestChangePassword, RequestUpdataProfile, ResponseProfile, ResponseUpdateProfile } from "../types/User";
import { httpRequest } from "./api";

export const getProfile = async (): Promise<AxiosResponse<ResponseProfile>> => {
    return await httpRequest.get('/profile')
}

export const updateProfile = async (request: RequestUpdataProfile): Promise<AxiosResponse<ResponseUpdateProfile>> => {
    return await httpRequest.put('/users', request)
}
export const changePasswordProfile = async (request: RequestChangePassword): Promise<AxiosResponse<ResponseUpdateProfile>> => {
    return await httpRequest.put('/users/password', request)
}

