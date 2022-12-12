//------ get Budget Plan By ID -------
export interface Persiapan {
    id: number;
    design_id: number;
    category: string;
    name: string;
    volume: number;
    unit: string;
    cost: number;
    deleted_at?: any;
    designId: number;
}

export interface Pondasi {
    id: number;
    design_id: number;
    category: string;
    name: string;
    volume: number;
    unit: string;
    cost: number;
    deleted_at?: any;
    designId: number;
}

export interface BudgetPlan {
    persiapan: Persiapan[];
    pondasi: Pondasi[];
}

export interface ResponseGetBudgetPlanByID {
    code: number;
    data: BudgetPlan;
}