import { AxiosResponse } from "axios"
import { ResponseDesign, ResponseSpecificDesign } from "../types/Design"
import { httpRequest } from "./api"

export const getAllDesigns = async (): Promise<AxiosResponse<ResponseDesign>> => {
    return await httpRequest.get('/designs')
}
export const getSpecificDesigns = async (id: number): Promise<AxiosResponse<ResponseSpecificDesign>> => {
    return await httpRequest.get(`/designs/${id}`)
}