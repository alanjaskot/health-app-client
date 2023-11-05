import { FinanceType } from "../enums/finance-type";

export interface IFinancialOperationType {
    id?: string;
    name: string;
    financeType: FinanceType;
}