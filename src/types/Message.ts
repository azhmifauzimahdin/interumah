//------ Fet All Chats with Designer ------

export interface ChatPartner {
    id: number;
    name: string;
    email: string;
}

export interface Chat {
    id: number;
    sender_id: number;
    receiver_id: number;
    contents: string;
    created_at: Date;
    deleted_at?: any;
    loggedInUserRole: string;
}

export interface Data {
    chatPartner: ChatPartner;
    chats: Chat[];
}

export interface ResponseGetAllChatsWithDesigner {
    code: number;
    data: Data;
}