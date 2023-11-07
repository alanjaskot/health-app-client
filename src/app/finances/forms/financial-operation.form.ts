import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { IFinancialOperation } from "../models/financial-operation";

export class FinancialOperationForm extends UntypedFormGroup {
  readonly id = this.get('id') as UntypedFormControl;
  readonly amount = this.get('amount') as UntypedFormControl;
  readonly financialCategory = this.get('financialCategory') as UntypedFormControl;
  readonly created = this.get('created') as UntypedFormControl;
  readonly description = this.get('description') as UntypedFormControl;
  
  constructor(
    operationType?: IFinancialOperation,
    readonly fb: UntypedFormBuilder = new UntypedFormBuilder()
  ) {
    super(
      fb.group({
        id: [operationType?.id ? operationType.id : ''],
        amount: [
          operationType?.amount ? operationType.amount : 0,
          [Validators.required],
        ],
        financialCategory: [
          operationType?.financialCategory.id ? operationType.financialCategory.id : '',
          [Validators.required],
        ],
        created: [
          operationType?.created ? operationType.created : new Date,
          [Validators.required],
        ],
        description: [
          operationType?.description ? operationType.description : null
        ],
      }).controls
    );
  }
}