import { Design } from "./Design";

export interface Users {
    id: number;
    name: string;
    email: string;
}

export interface UsersResponse {
    users: Users[];
}

export interface User {
    name: string;
    email: string;
    imageUrl: string;
    phone: string;
    age: number;
    address: string;
    job: string;
    isDesigner: boolean;
    designs: Design[];
}

export interface UserResponse {
    code: number;
    data: User;
}