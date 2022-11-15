export interface Design {
    id: number;
    userId: number;
    categoryId: number;
    title: string;
    description: string;
    area: number;
    imageUrl: string;
}

export interface PageDesign {
    size: number;
}

export interface DesignResponse {
    code: number;
    data: Design[];
    page: PageDesign;
}