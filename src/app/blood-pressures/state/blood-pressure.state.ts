import { StateToken } from '@ngxs/store';
import { IBloodPressure } from '../models/blood-pressure.model';

export interface BloodPressureStateModel {
  loaded: boolean;
  bps: IBloodPressure[];
  deletedBps: IBloodPressure[]; // temp
}

const BLOOD_PRESSURE_STATE_TOKEN = new StateToken<BloodPressureStateModel>('bloodPressureSate');
