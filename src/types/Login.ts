import { User } from "./User";

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    expiresOn: string;
    token: string;
    user: User;
    userId: string;
}