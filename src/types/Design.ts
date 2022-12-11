export interface Designer {
    id: number;
    name: string;
    email: string;
    imageUrl: string;
}

export interface Design {
    id: number;
    categoryId: number;
    title: string;
    description: string;
    area: number;
    imageUrl: string;
    price: string;
    location: string;
    budgetPlan?: any;
    designer: Designer;
}

export interface Page {
    size: number;
}

export interface ResponseDesign {
    code: number;
    data: Design[];
    page: Page;
}

export interface ResponseGetDesignByID {
    code: number;
    data: Design;
}