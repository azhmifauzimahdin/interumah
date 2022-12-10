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
export interface Profile {
    name?: any;
    email: string;
    imageUrl: string;
    phone?: any;
    age?: any;
    address?: any;
    job?: any;
    isDesigner: boolean;
}

export interface ResponseProfile {
    code: number;
    data: Profile;
}

export interface RequestUpdataProfile {
    name: string;
    age: string;
    phone: string;
    address: string;
    job: string;
}

export interface ResponseUpdateProfile {
    code: number;
    message: string;
}
