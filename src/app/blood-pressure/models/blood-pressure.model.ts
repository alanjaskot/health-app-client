import { IIdName } from 'src/app/shared/models/id-name';

export interface IBloodPressure {
  id: string;
  diastolicPressure: number;
  systolicPressure: number;
  pulse: number;
  measurementAt: Date;
  Medicines: IIdName[];
}
