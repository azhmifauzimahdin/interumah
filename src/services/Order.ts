import { AxiosResponse } from "axios";
import { RequestOrderDesign, ResponseGetAllOrderHistory, ResponseGetOrderById, ResponseOrderDesign } from "../types/Order";
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