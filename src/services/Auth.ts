import { AxiosResponse } from "axios";
import { LoginRequest, LoginResponse, ResponseRefreshAccessToken } from "../types/Login";
import { LogoutRequest, LogoutResponse } from "../types/Logout";
import { RegisterRequest, RegisterResponse } from "../types/Register";
import { httpRequest } from "./api";

export const register = async (request: RegisterRequest): Promise<AxiosResponse<RegisterResponse>> => {
    return await httpRequest.post('/users/register', request)
}

export const login = async (request: LoginRequest): Promise<AxiosResponse<LoginResponse>> => {
    return await httpRequest.post('/auth', request)
}

export const refreshAccessToken = async (request: string): Promise<AxiosResponse<ResponseRefreshAccessToken>> => {
    return await httpRequest.put('/auth', { refreshToken: request })
}

export const logout = async (request: LogoutRequest): Promise<AxiosResponse<LogoutResponse>> => {
    const config = {
        data: {
            refreshToken: request
        }
    }
    return await httpRequest.delete('/auth', config)
}