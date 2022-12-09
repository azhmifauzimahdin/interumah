export interface DesignFavorite {
    id: number;
    userId: number;
    categoryId: number;
    title: string;
    price: string;
    location: string;
    designerName: string;
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

export interface ResponseAddDeleteFavorite {
    code: number;
    message: string;
}