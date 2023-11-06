import { IFinancialOperationType } from "../models/financial-operation-type";

export class LoadFinancialOperationType {
  static type = '[Finance Operation Type] Fetch Finance Operation Type';
  constructor() {}
}

export class LoadFinancialOperationTypeById {
  static type = '[Finance Operation Type] Fetch Finance Operation Type By Id';
  constructor(public id: string) {}
}

export class AddFinancialOperationType {
  static type = '[Finance Operation Type] Add Finance Operation Type';
  constructor(public toCreate: IFinancialOperationType) {}
}

export class UpdateFinancialOperationType {
  static type = '[Finance Operation Type] Update Finance Operation Type';
  constructor(public toUpdate: IFinancialOperationType) {}
}

export class DeleteFinancialOperationType {
  static type = '[Finance Operation Type] Delete Finance Operation Type';
  constructor(public id: string) {}
}