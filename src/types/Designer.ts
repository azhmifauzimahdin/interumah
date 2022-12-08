import { Design } from "./Design";

export interface Designer {
    id: number;
    name: string;
    email: string;
    imageUrl: string;
    phone: string;
    age?: number;
    address: string;
    job: string;
    isDesigner: boolean;
    designs: Design[];
}

export interface ResponseDesigner {
    code: number;
    data: Designer[];
}