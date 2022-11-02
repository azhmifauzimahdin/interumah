export interface Users {
    id: number;
    name: string;
    email: string;
}

export interface UsersResponse {
    users: Users[];
}

export interface Profile {
    name: string,
    phone: string,
    age: string,
    address: string,
    job: string,
    email: string,
    role: string
}

export interface ProfileResponse {
    code: number,
    data: Profile
}