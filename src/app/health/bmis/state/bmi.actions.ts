import { IBmiModel } from '../models/bmi.model';

export class LoadBmis {
  static type = '[BMI] Fetch Bmis';
  constructor() {}
}

export class LoadDeletedBmis {
  static type = '[BMI] Fetch Deleted Bmis';
  constructor(public userId: string, public isDeleted: boolean) {}
}

export class LoadBmiById {
  static type = '[BMI] Get Bmi By Id';
  constructor(public id: string) {}
}

export class AddBmi {
  static type = '[BMI] Add Bmi';
  constructor(public toCreate: IBmiModel) {}
}

export class UpdateBmi {
  static type = '[BMI] Update Bmi';
  constructor(public toUpdate: IBmiModel) {}
}

export class DeleteBmi {
  static type = '[BMI] Delete Bmi';
  constructor(public id: string) {}
}
