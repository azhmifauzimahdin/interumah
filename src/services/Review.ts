import { AxiosResponse } from "axios";
import { ReponseReview, RequestAddReview, ResponseGetReview } from "../types/Review";
import { httpRequest } from "./api";

export const addReview = async (id: number, request: RequestAddReview): Promise<AxiosResponse<ReponseReview>> => {
    return await httpRequest.post(`/designs/${id}/reviews`, request)
}

export const getReviewByIdDesign = async (id: number): Promise<AxiosResponse<ResponseGetReview>> => {
    return await httpRequest.get(`/designs/${id}/reviews`)
}