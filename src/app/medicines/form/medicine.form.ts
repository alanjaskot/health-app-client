import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { IMedicineModel } from '../models/medicine.model';

export class MedicineForm extends UntypedFormGroup {
  readonly id = this.get('id') as UntypedFormControl;
  readonly name = this.get('name') as UntypedFormControl;
  readonly dose = this.get('dose') as UntypedFormControl;
  readonly unit = this.get('unit') as UntypedFormControl;
  readonly medicalDosage = this.get('medicalDosage') as UntypedFormControl;

  constructor(
    readonly fb: UntypedFormBuilder = new UntypedFormBuilder(),
    medicine?: IMedicineModel
  ) {
    super(
      fb.group({
        id: [medicine?.id ? medicine.id : ''],
        name: [medicine?.name ? medicine.name : '', Validators.required],
        dose: [medicine?.dose ? medicine.dose : 0, Validators.required],
        unit: [medicine?.unit ? medicine.unit : '', Validators.required],
        medicalDosage: [medicine?.medicalDosage ? medicine.medicalDosage : 0],
      }).controls
    );
  }
}
