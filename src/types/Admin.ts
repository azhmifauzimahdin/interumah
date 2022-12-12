export interface ReponseGenerateCredential {
    code: number;
    message: string;
    authToken: string;
}

export interface RequestLoginAdmin {
    token: string;
}

export interface Data {
    accessToken: string;
}

export interface ResponseLoginAdmin {
    code: number;
    message: string;
    data: Data;
}

export interface Designer {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
}

export interface Page {
    total: number;
}

export interface ResponseAllDesigner {
    code: number;
    data: Designer[];
    page: Page;
}