import { AxiosResponse } from "axios";
import { ResponseGetAllChatsWithDesigner } from "../types/Message";
import { httpRequest } from "./api";

export const getAllChatsWithDesigner = async (idDesigner: number): Promise<AxiosResponse<ResponseGetAllChatsWithDesigner>> => {
    return await httpRequest.get(`/chats/${idDesigner}`)
}