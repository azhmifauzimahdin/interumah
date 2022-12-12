//------ Order Design ------
export interface RequestOrderDesign {
    designId: number;
}

export interface DataOrder {
    id: number;
}

export interface ResponseOrderDesign {
    code: number;
    message: string;
    data: DataOrder;
}

//------- Get All Order -------

export interface Design {
    id: number;
    categoryId: number;
    title: string;
    imageUrl: string;
}

export interface DesignOrder {
    id: number;
    status: string;
    design: Design;
}

export interface ResponseGetAllOrderHistory {
    code: number;
    data: DesignOrder[];
}

//------- Get Order By ID --------

export interface Designer {
    id: number;
    name: string;
    imageUrl: string;
}

export interface OrderData {
    id: number;
    price: number;
    status: string;
    design: Design;
    designer: Designer;
    receipts: any[];
}

export interface ResponseGetOrderById {
    code: number;
    data: OrderData;
}

//------- Upload Receipt ------
export interface ResponseUploadReceipt {
    code: number;
    message: string;
}