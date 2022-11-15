export interface RegisterRequest {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface RegisterResponseData {
    email: string;
}

export interface RegisterResponse {
    code: number;
    data: RegisterResponseData;
}