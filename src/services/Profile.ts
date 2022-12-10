import { AxiosResponse } from "axios";
import { ResponseProfile } from "../types/User";
import { httpRequest } from "./api";

export const getProfile = async (): Promise<AxiosResponse<ResponseProfile>> => {
    return await httpRequest.get('/profile')
}