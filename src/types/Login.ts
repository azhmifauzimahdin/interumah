export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponseData {
    accessToken: string;
    refreshToken: string;
}

export interface LoginResponse {
    code: number;
    data: LoginResponseData;
}