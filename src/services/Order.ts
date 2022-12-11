import { AxiosResponse } from "axios";
import { RequestOrderDesign, ResponseGetAllOrderHistory, ResponseOrderDesign } from "../types/Order";
import { httpRequest } from "./api";

export const orderDesign = async (request: RequestOrderDesign): Promise<AxiosResponse<ResponseOrderDesign>> => {
    return await httpRequest.post('/orders', request)
}
export const getAllOrderHistory = async (): Promise<AxiosResponse<ResponseGetAllOrderHistory>> => {
    return await httpRequest.get('/orders')
}