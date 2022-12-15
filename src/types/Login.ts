//------- Login ------
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

//------ Refresf Access Token -------
export interface AccessToken {
    accessToken: string;
}

export interface ResponseRefreshAccessToken {
    code: number;
    data: AccessToken;
}