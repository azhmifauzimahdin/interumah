export interface LogoutRequest {
    refreshToken: string
}

export interface LogoutResponse {
    code: number;
    message: string;
}