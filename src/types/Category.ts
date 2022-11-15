export interface Category {
    id: number;
    name: string;
}

export interface CategoryData {
    categories: Category[];
}

export interface CategoryResponse {
    code: number;
    data: CategoryData;
}