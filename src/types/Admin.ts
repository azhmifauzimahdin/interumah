//------- Generate Token Login ------
export interface ReponseGenerateCredential {
    code: number;
    message: string;
    authToken: string;
}

export interface RequestLoginAdmin {
    token: string;
}

//------ Login Admin ------
export interface Data {
    accessToken: string;
}

export interface ResponseLoginAdmin {
    code: number;
    message: string;
    data: Data;
}

//------ Get Dashboar Data ------
export interface Users {
    userCount: number;
    designerCount: number;
    total: number;
}

export interface Designs {
    total: number;
}

export interface Categories {
    total: number;
}

export interface Orders {
    newOrderCount: number;
    inProgressCount: number;
    total: number;
}

export interface DataDashboard {
    users: Users;
    designs: Designs;
    categories: Categories;
    orders: Orders;
    profit: number;
}

export interface ResponseDashboardData {
    code: number;
    data: DataDashboard;
}

//------ Get All Order -------
export interface Design {
    id: number;
    title: string;
    area: number;
    price: number;
}

export interface Designers {
    name: string;
}

export interface Customer {
    name: string;
}

export interface Order {
    id: number;
    category: string;
    status: string;
    design: Design;
    designers: Designers;
    customer: Customer;
    profit: number;
}

export interface Page {
    total: number;
}

export interface ResponseAllOrder {
    code: number;
    data: Order[];
    page: Page;
}

//------ Get All Design ------
export interface Designer {
    name: string;
}

export interface Design {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    designer: Designer;
    location: string;
    orderTotal: number;
}

export interface Page {
    size: number;
    total: number;
    totalPages: number;
    current: number;
}

export interface ResponseALlDesign {
    code: number;
    data: Design[];
    page: Page;
}

//------ Get All Designer
export interface Designer {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
}

export interface Page {
    total: number;
}

export interface ResponseAllDesigner {
    code: number;
    data: Designer[];
    page: Page;
}