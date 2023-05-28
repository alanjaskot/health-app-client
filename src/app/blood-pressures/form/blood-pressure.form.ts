import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { IBloodPressureModel } from '../models/blood-pressure.model';

export class BloodPressureForm extends UntypedFormGroup {
  readonly id = this.get('id') as UntypedFormControl;
  readonly diastolicPressure = this.get('diastolicPressure') as UntypedFormControl;
  readonly systolicPressure = this.get('systolicPressure') as UntypedFormControl;
  readonly pulse = this.get('pulse') as UntypedFormControl;
  readonly measurementAt = this.get('measurementAt') as UntypedFormControl;
  readonly medicines = this.get('medicines') as UntypedFormControl;
  readonly hasTakenMedicines = this.get('hasTakenMedicines') as UntypedFormControl;

  constructor(
    bp?: IBloodPressureModel,
    readonly fb: UntypedFormBuilder = new UntypedFormBuilder()
  ) {
    super(
      fb.group({
        id: [bp?.id ? bp.id : ''],
        diastolicPressure: [
          bp?.diastolicPressure ? bp.diastolicPressure : 0,
          [Validators.required, Validators.min(60), Validators.max(250)],
        ],
        systolicPressure: [
          bp?.systolicPressure ? bp.systolicPressure : 0,
          [Validators.required, Validators.min(60), Validators.max(250)],
        ],
        pulse: [
          bp?.pulse ? bp.pulse : 0,
          [Validators.required, Validators.min(60), Validators.max(250)],
        ],
        measurementAt: [
          bp?.measurementAt ? bp.measurementAt : Date.now,
          [Validators.required, Validators.required],
        ],
        hasTakenMedicines: [bp?.medicines.length > 0 ? true : false],
        medicines: [bp?.medicines ? bp.medicines : []],
      }).controls
    );
  }
}
