export interface Category {
    id: number;
    name: string;
    description: string;
    background: string;
    icon: string;
}

export interface CategoryData {
    categories: Category[];
}

export interface CategoryResponse {
    code: number;
    data: CategoryData;
}

export interface ReponseSpecificCategory {
    code: number;
    data: Category;
}