import { AxiosResponse } from "axios";
import { ReponseGenerateCredential, RequestLoginAdmin, ResponseAllDesigner, ResponseLoginAdmin } from "../types/Admin";
import { httpRequest } from "./api";

export const generateAdminCredential = async (): Promise<AxiosResponse<ReponseGenerateCredential>> => {
    return await httpRequest.post('/admin/auth/generate-secret')
}

export const loginAdmin = async (request: RequestLoginAdmin): Promise<AxiosResponse<ResponseLoginAdmin>> => {
    return await httpRequest.post('/admin/auth', request)
}
export const getAllDesigner = async (): Promise<AxiosResponse<ResponseAllDesigner>> => {
    return await httpRequest.get('/admin/data/designers')
}