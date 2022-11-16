export interface EmailResetPasswordRequest {
    email: string;
}

export interface EmailResetPasswordResponse {
    code: number;
    status: string;
}

export interface GetEmailTokenChangePassword {
    email: string;
}

export interface GetEmailTokenChangePasswordReponse {
    code: number;
    message: string;
    data: GetEmailTokenChangePassword;
}

export interface ChangePasswordData {
    email: string;
    password: string;
    confirmPassword: string;
    otp: string;
}

export interface ChangePasswordResponse {
    code: number;
    message: string;
}
