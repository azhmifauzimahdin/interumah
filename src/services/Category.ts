import { AxiosResponse } from "axios";
import { CategoryResponse } from "../types/Category";
import { httpRequest } from "./api";

export const getAllCategories = async (): Promise<AxiosResponse<CategoryResponse>> => {
    return await httpRequest.get('/designs/categories')
}