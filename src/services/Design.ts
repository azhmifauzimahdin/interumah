import { AxiosResponse } from "axios"
import { ResponseDesign, ResponseGetDesignByID } from "../types/Design"
import { httpRequest } from "./api"

export const getAllDesigns = async (): Promise<AxiosResponse<ResponseDesign>> => {
    return await httpRequest.get('/designs')
}
export const getDesignByID = async (id: number): Promise<AxiosResponse<ResponseGetDesignByID>> => {
    return await httpRequest.get(`/designs/${id}`)
}

export const getDesignByIDCategory = async (id: number): Promise<AxiosResponse<ResponseDesign>> => {
    return await httpRequest.get(`/designs?category=${id}`)
}

export const searchDesignByTitle = async (title: string): Promise<AxiosResponse<ResponseDesign>> => {
    return await httpRequest.get(`/designs?title=${title}`)
}