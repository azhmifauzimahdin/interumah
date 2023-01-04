import { AxiosResponse } from "axios";
import { ResponseGetAllChatsLastMessage, ResponseGetAllChatsWithDesigner } from "../types/Message";
import { httpRequest } from "./api";

export const getAllChatsWithDesigner = async (idDesigner: number): Promise<AxiosResponse<ResponseGetAllChatsWithDesigner>> => {
    return await httpRequest.get(`/chats/${idDesigner}`)
}
export const getAllChatsLastMessage = async (): Promise<AxiosResponse<ResponseGetAllChatsLastMessage>> => {
    return await httpRequest.get('/chats')
}