import { AxiosResponse } from "axios";
import { LoginRequest, LoginResponse } from "../types/Login";
import { httpRequest } from "./api";

export const login = async (request: LoginRequest): Promise<AxiosResponse<LoginResponse>> => {
    return await httpRequest.post('/auth/login', request)
}