import { AxiosResponse } from "axios";
import { RequestOrderDesign, ResponseGetAllOrderHistory, ResponseGetOrderById, ResponseOrderDesign, ResponseUploadReceipt } from "../types/Order";
import { httpRequest } from "./api";

export const orderDesign = async (request: RequestOrderDesign): Promise<AxiosResponse<ResponseOrderDesign>> => {
    return await httpRequest.post('/orders', request)
}
export const getAllOrderHistory = async (): Promise<AxiosResponse<ResponseGetAllOrderHistory>> => {
    return await httpRequest.get('/orders')
}

export const getOrderByID = async (id: number): Promise<AxiosResponse<ResponseGetOrderById>> => {
    return await httpRequest.get(`/orders/${id}`)
}

export const uploadReceipt = async (id: number, request: any): Promise<AxiosResponse<ResponseUploadReceipt>> => {
    return await httpRequest.post(`/orders/${id}/receipts`, request)
}