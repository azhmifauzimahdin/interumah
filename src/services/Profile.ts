import { AxiosResponse } from "axios";
import { RequestChangePassword, RequestUpdataProfile, RequestUpdateEmail, ResponseProfile, ResponseUpdateProfile } from "../types/User";
import { httpRequest } from "./api";

export const getProfile = async (): Promise<AxiosResponse<ResponseProfile>> => {
    return await httpRequest.get('/profile')
}

export const updateProfile = async (request: RequestUpdataProfile): Promise<AxiosResponse<ResponseUpdateProfile>> => {
    return await httpRequest.put('/users', request)
}

export const updateEmail = async (request: RequestUpdateEmail): Promise<AxiosResponse<ResponseUpdateProfile>> => {
    return await httpRequest.put('/users/email', request)
}

export const updateImageProfil = async (request: any): Promise<AxiosResponse<ResponseUpdateProfile>> => {
    return await httpRequest.put('/users/image', request)
}
export const changePasswordProfile = async (request: RequestChangePassword): Promise<AxiosResponse<ResponseUpdateProfile>> => {
    return await httpRequest.put('/users/password', request)
}

