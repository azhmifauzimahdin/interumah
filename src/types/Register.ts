import { User } from "./User";

export interface RegisterRequest {
    name: string;
    age: string;
    phone: string;
    address: string;
    job: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
}

export interface RegisterResponseData {
    email: string;
}

export interface RegisterResponse {
    code: number;
    data: RegisterResponseData;
}