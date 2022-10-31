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