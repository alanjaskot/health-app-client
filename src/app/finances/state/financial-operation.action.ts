import { IFinancialOperation } from "../models/financial-operation";

export class LoadFinancialOperation {
  static type = '[Finance Operation] Fetch Finance Operation';
  constructor(public pageSize: number, public pageNumber: number) {}
}

export class LoadFinancialOperationByDate {
  static type = '[Finance Operation] Fetch Finance Operation By Date';
  constructor(
    public from: Date,
    public to: Date,
    public pageSize: number, 
    public pageNumber: number) {}
}

export class LoadFinancialOperationById {
  static type = '[Finance Operation] Fetch Finance Operation By Id';
  constructor(public id: string) {}
}

export class AddFinancialOperation {
  static type = '[Finance Operation] Add Finance Operation';
  constructor(public toCreate: IFinancialOperation) {}
}

export class UpdateFinancialOperation {
  static type = '[Finance Operation] Update Finance Operation';
  constructor(public toUpdate: IFinancialOperation) {}
}

export class DeleteFinancialOperation {
  static type = '[Finance Operation] Delete Finance Operation';
  constructor(public id: string) {}
}

export class UndoDeleteFinancialOperation {
  static type = '[Finance Operation] Undo Delete Finance Operation';
  constructor(public id: string) {}
}