export interface DesignFavorite {
    id: number;
    userId: number;
    categoryId: number;
    title: string;
    imageUrl: string;
}

export interface Favorite {
    id: number;
    design: DesignFavorite;
}

export interface ResponseFavorite {
    code: number;
    data: Favorite[];
}

export interface ResponseDeleteFavorite {
    code: number;
    message: string;
}