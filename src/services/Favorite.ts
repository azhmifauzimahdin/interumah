import { AxiosResponse } from "axios";
import { ResponseAddDeleteFavorite, ResponseFavorite } from "../types/Favorite";
import { httpRequest } from "./api";

export const getAllDesignFavorite = async (): Promise<AxiosResponse<ResponseFavorite>> => {
    return await httpRequest.get('/bookmarks')
}

export const FavoriteDesign = async (id: number): Promise<AxiosResponse<ResponseAddDeleteFavorite>> => {
    return await httpRequest.post(`/designs/${id}/bookmarks`)
}