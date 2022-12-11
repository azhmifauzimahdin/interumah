import { AxiosResponse } from "axios";
import { RequestOrderDesign, ResponseOrderDesign } from "../types/Order";
import { httpRequest } from "./api";

export const orderDesign = async (request: RequestOrderDesign): Promise<AxiosResponse<ResponseOrderDesign>> => {
    return await httpRequest.post('/orders', request)
}