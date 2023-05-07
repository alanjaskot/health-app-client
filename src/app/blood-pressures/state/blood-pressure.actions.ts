import { IBloodPressure } from '../models/blood-pressure.model';

export class LoadBloodPressures {
  static type = '[Blood Pressure] Fetch Blood Pressures';
  constructor() {}
}

export class LoadDeletedBloodPressures {
  static type = '[Blood Pressure] Fetch Deleted Blood Pressures';
  constructor(public userId: string, public isDeleted: boolean) {}
}

export class LoadBloodPressureById {
  static type = '[Blood Pressure] Get Blood Pressure By Id';
  constructor(public id: string) {}
}

export class AddBloodPressure {
  static type = '[Blood Pressure] Add Blood Pressure';
  constructor(public toCreate: IBloodPressure) {}
}

export class UpdateBloodPressure {
  static type = '[Blood Pressure] Update Blood Pressure';
  constructor(public toUpdate: IBloodPressure) {}
}

export class DeleteBloodPressure {
  static type = '[Blood Pressure] Delete Blood Pressure';
  constructor(public id: string) {}
}
