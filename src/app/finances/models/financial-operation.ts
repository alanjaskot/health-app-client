export interface IFinancialOperation {
    id: string;
    amount: number;
    financialCategory: string;
    created: Date;
    description?: string
}