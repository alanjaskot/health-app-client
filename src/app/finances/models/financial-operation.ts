import { IIdName } from "src/app/shared/models/id-name";

export interface IFinancialOperation {
    id: string;
    amount: number;
    financialCategory: IIdName;
    created: Date;
    description?: string
}