export interface RequestOrderDesign {
    designId: number;
}

export interface ResponseOrderDesign {
    code: number;
    message: string;
}

interface Design {
    id: number;
    categoryId: number;
    title: string;
    imageUrl: string;
}

export interface DesignOrder {
    id: number;
    status: string;
    design: Design;
}

export interface ResponseGetAllOrderHistory {
    code: number;
    data: DesignOrder[];
}