import { AxiosResponse } from "axios";
import { CategoryResponse, ReponseSpecificCategory } from "../types/Category";
import { httpRequest } from "./api";

export const getAllCategories = async (): Promise<AxiosResponse<CategoryResponse>> => {
    return await httpRequest.get('/designs/categories')
}

export const getCategoryByID = async (id: number): Promise<AxiosResponse<ReponseSpecificCategory>> => {
    return await httpRequest.get(`/designs/categories/${id}`)
}