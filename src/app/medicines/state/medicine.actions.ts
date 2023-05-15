import { IMedicineModel } from '../models/medicine.model';

export class LoadMedicines {
  static readonly type = '[Medicine] Fetch Medicines';
  constructor() {}
}

export class LoadDeletedMedicines {
  static readonly type = '[Medicine] Fetch Deleted Medicines';
  constructor(public userId: string, public isDeleted: boolean) {}
}

export class LoadMedicineById {
  static readonly type = '[Medicine] Fetch Medicine By Id';
  constructor(public id: string) {}
}

export class AddMedicine {
  static readonly type = '[Medicine] Add Medicine';
  constructor(public medicine: IMedicineModel) {}
}

export class UpdateMedicine {
  static readonly type = '[Medicine] Update Medicine';
  constructor(public medicine: IMedicineModel) {}
}

export class DeleteMedicine {
  static readonly type = '[Medicine] Delete Medicine';
  constructor(public id: string) {}
}
