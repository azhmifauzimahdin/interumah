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

export interface ResponseDesign {
    code: number;
    data: Design[];
    page: PageDesign;
}

export interface SpecificDesign {
    userId: number;
    categoryId: number;
    title: string;
    description: string;
    area: number;
    imageUrl: string;
}

export interface ResponseSpecificDesign {
    code: number;
    data: SpecificDesign;
}