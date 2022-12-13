export interface RequestAddReview {
    designRating: number;
    designerRating: number;
    comments: string;
}

export interface Data {
    id: number;
    designRating: number;
    designerRating: number;
    comments: string;
}

export interface ReponseReview {
    code: number;
    message: string;
    data: Data;
}