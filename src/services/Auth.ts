import { AxiosResponse } from "axios";
import { LoginRequest, LoginResponse } from "../types/Login";
import { LogoutRequest, LogoutResponse } from "../types/Logout";
import { RegisterRequest, RegisterResponse } from "../types/Register";
import { httpRequest } from "./api";

export const register = async (request: RegisterRequest): Promise<AxiosResponse<RegisterResponse>> => {
    return await httpRequest.post('/users', request)
}

export const login = async (request: LoginRequest): Promise<AxiosResponse<LoginResponse>> => {
    return await httpRequest.post('/auth', request)
}

export const logout = async (): Promise<AxiosResponse<LogoutResponse>> => {
    return await httpRequest.delete('/auth')
}