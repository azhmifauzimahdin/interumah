import { AxiosResponse } from "axios"
import { ChangePasswordData, ChangePasswordResponse, EmailResetPasswordRequest, EmailResetPasswordResponse, GetEmailTokenChangePasswordReponse } from "../types/ResetPassword"
import { httpRequest } from "./api"

export const RequestEmailResetPassword = async (request: EmailResetPasswordRequest): Promise<AxiosResponse<EmailResetPasswordResponse>> => {
    return await httpRequest.post('/users/forgot-password', request)
}
export const GetEmailChangePassword = async (request: any): Promise<AxiosResponse<GetEmailTokenChangePasswordReponse>> => {
    return await httpRequest.get(`/users/forgot-password/verify?token=${request}`)
}

export const ChangePasswordPost = async (request: ChangePasswordData): Promise<AxiosResponse<ChangePasswordResponse>> => {
    return await httpRequest.post('/users/forgot-password/verify', request)
}