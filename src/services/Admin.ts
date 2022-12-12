import { AxiosResponse } from "axios";
import { ReponseGenerateCredential, RequestLoginAdmin, ResponseALlDesign, ResponseAllDesigner, ResponseAllOrder, ResponseDashboardData, ResponseLoginAdmin } from "../types/Admin";
import { httpRequest } from "./api";

export const generateAdminCredential = async (): Promise<AxiosResponse<ReponseGenerateCredential>> => {
    return await httpRequest.post('/admin/auth/generate-secret')
}

export const loginAdmin = async (request: RequestLoginAdmin): Promise<AxiosResponse<ResponseLoginAdmin>> => {
    return await httpRequest.post('/admin/auth', request)
}

export const getDashboardData = async (): Promise<AxiosResponse<ResponseDashboardData>> => {
    return await httpRequest.get('/admin/data?users=1&designers=1&categories=false&designs=1&orders=1')
}

export const getAllOrder = async (): Promise<AxiosResponse<ResponseAllOrder>> => {
    return await httpRequest.get('/admin/data/orders')
}

export const getAllDesign = async (): Promise<AxiosResponse<ResponseALlDesign>> => {
    return await httpRequest.get('/admin/data/designs?size=5')
}

export const getAllDesigner = async (): Promise<AxiosResponse<ResponseAllDesigner>> => {
    return await httpRequest.get('/admin/data/designers')
}