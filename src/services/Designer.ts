import { AxiosResponse } from "axios";
import { ResponseDesigner } from "../types/Designer";
import { httpRequest } from "./api";

export const getAllDesigner = async (): Promise<AxiosResponse<ResponseDesigner>> => {
    return await httpRequest.get('/users/designers')
}

export const searchDesignerByName = async (name: string): Promise<AxiosResponse<ResponseDesigner>> => {
    return await httpRequest.get(`/users/designers?name=${name}`)
}