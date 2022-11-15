import { AxiosResponse } from "axios"
import { DesignResponse } from "../types/Design"
import { httpRequest } from "./api"

export const getAllDesigns = async (): Promise<AxiosResponse<DesignResponse>> => {
    return await httpRequest.get('/designs')
}