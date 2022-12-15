//----- Add Review ------
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

//------ Get Review By Id Design -------
export interface Reviewer {
    name: string;
    imageUrl: string;
}

export interface ReviewDesign {
    id: number;
    designTitle: string;
    designImageUrl: string;
    reviewer: Reviewer;
    designRating: number;
    designerRating: number;
    designComments: string;
    designerComments: string;
}

export interface Page {
    size: number;
}

export interface Review {
    designRatingAverage: string;
    designerRatingAverage: string;
}

export interface ResponseGetReview {
    code: number;
    data: ReviewDesign[];
    page: Page;
    review: Review;
}