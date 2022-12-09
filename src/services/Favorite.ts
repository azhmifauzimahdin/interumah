import { AxiosResponse } from "axios";
import { ResponseFavorite } from "../types/Favorite";
import { httpRequest } from "./api";

export const getAllDesignFavorite = async (): Promise<AxiosResponse<ResponseFavorite>> => {
    return await httpRequest.get('/bookmarks')
}