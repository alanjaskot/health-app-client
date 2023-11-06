import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { IFinancialOperationType } from "../models/financial-operation-type";
import { FinanceType } from "../enums/finance-type";

export class FinancialOperationTypeForm extends UntypedFormGroup {
  readonly id = this.get('id') as UntypedFormControl;
  readonly name = this.get('name') as UntypedFormControl;
  readonly financeType = this.get('financeType') as UntypedFormControl;
  
  constructor(
    operationType?: IFinancialOperationType,
    readonly fb: UntypedFormBuilder = new UntypedFormBuilder()
  ) {
    super(
      fb.group({
        id: [operationType?.id ? operationType.id : ''],
        name: [
          operationType?.name ? operationType.name : '',
          [Validators.required],
        ],
        financeType: [
          operationType?.financeType ? operationType.financeType : FinanceType.REVENUES,
          [Validators.required, Validators.min(0), Validators.max(1)],
        ],
      }).controls
    );
  }
}