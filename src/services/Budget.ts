import { AxiosResponse } from "axios";
import { ResponseGetBudgetPlanByID } from "../types/Budget";
import { httpRequest } from "./api";

export const getBudgetPlanByID = async (id: number): Promise<AxiosResponse<ResponseGetBudgetPlanByID>> => {
    return await httpRequest.get(`/designs/${id}/budget-plans`)
}