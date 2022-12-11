import { AxiosResponse } from "axios";
import { ReponseReview, RequestAddReview } from "../types/Review";
import { httpRequest } from "./api";

export const addReview = async (id: number, request: RequestAddReview): Promise<AxiosResponse<ReponseReview>> => {
    return await httpRequest.post(`/designs/${id}/reviews`, request)
}