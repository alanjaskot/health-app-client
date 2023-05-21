import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { IBmiModel } from '../models/bmi.model';

export class BmiForm extends UntypedFormGroup {
  readonly id = this.get('id') as UntypedFormControl;
  readonly bmi = this.get('bmi') as UntypedFormControl;
  readonly height = this.get('height') as UntypedFormControl;
  readonly weight = this.get('weight') as UntypedFormControl;
  readonly created = this.get('created') as UntypedFormControl;

  constructor(bmi?: IBmiModel, readonly fb: UntypedFormBuilder = new UntypedFormBuilder()) {
    super(
      fb.group({
        id: [bmi?.id ? bmi.id : ''],
        bmi: [bmi?.bmi ? bmi.bmi : 0],
        weight: [bmi?.weight ? bmi.weight : 0],
        height: [bmi?.height ? bmi.height : 0],
        created: [bmi?.created ? bmi.id : new Date()],
      }).controls
    );
  }
}
