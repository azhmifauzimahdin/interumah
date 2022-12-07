import { AxiosResponse } from "axios"
import { ResponseDesign, ResponseGetDesignByID } from "../types/Design"
import { httpRequest } from "./api"

export const getAllDesigns = async (): Promise<AxiosResponse<ResponseDesign>> => {
    return await httpRequest.get('/designs')
}
export const getDesignByID = async (id: number): Promise<AxiosResponse<ResponseGetDesignByID>> => {
    return await httpRequest.get(`/designs/${id}`)
}