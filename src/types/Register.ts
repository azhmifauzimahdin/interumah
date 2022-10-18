import { User } from "./User";

export interface RegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
}

export interface RegisterResponse {
    expiresOn: string;
    token: string;
    user: User;
    userId: string;
}