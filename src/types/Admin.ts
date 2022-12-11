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