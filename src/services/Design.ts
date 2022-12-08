import { AxiosResponse } from "axios"
import { ResponseDesign, ResponseGetDesignByID, ResponseSearchDesignByTitle } from "../types/Design"
import { httpRequest } from "./api"

export const getAllDesigns = async (): Promise<AxiosResponse<ResponseDesign>> => {
    return await httpRequest.get('/designs')
}
export const getDesignByID = async (id: number): Promise<AxiosResponse<ResponseGetDesignByID>> => {
    return await httpRequest.get(`/designs/${id}`)
}

export const searchDesignByTitle = async (title: string): Promise<AxiosResponse<ResponseSearchDesignByTitle>> => {
    return await httpRequest.get(`/designs?title=${title}`)
}