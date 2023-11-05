import { IIdName } from 'src/app/shared/models/id-name';

export interface IBloodPressureModel {
  id: string;
  diastolicPressure: number;
  systolicPressure: number;
  pulse: number;
  measurementAt: Date;
  medicines: IIdName[];
  isDelete: boolean;
}
