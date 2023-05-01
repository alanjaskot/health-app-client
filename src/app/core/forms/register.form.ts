import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

export class RegisterForm extends UntypedFormGroup {
  readonly userName = this.get('userName') as UntypedFormControl;
  readonly password = this.get('password') as UntypedFormControl;
  readonly confirmPassword = this.get('confirmPassword') as UntypedFormControl;

  constructor(readonly fb: UntypedFormBuilder = new UntypedFormBuilder()) {
    super(
      fb.group({
        userName: ['', Validators.required],
        password: ['', [Validators.required, Validators.min(6)]],
        confirmPassword: ['', [Validators.required, Validators.min(6)]],
      }).controls
    );
  }
}
