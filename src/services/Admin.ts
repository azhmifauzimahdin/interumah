import { AxiosResponse } from "axios";
import { ResponseAllDesigner } from "../types/Admin";
import { httpRequest } from "./api";

export const getAllDesigner = async (): Promise<AxiosResponse<ResponseAllDesigner>> => {
    return await httpRequest.get('/admin/data/designers')
}