import { UntypedFormBuilder, UntypedFormControl, Validators } from "@angular/forms";

export class RegisterForm extends UntypedFormBuilder {
    readonly userName = this.get('userName') as UntypedFormControl;
    readonly password = this.get('password') as UntypedFormControl;
    readonly confirmPassword = this.get('confirmPassword') as UntypedFormControl;

    constructor(readonly fb: UntypedFormBuilder = new UntypedFormBuilder()) {
        super(
            fb.group({
                login: ['', Validators.required],
                password: ['', Validators.required],
                confirmPassword:  ['', Validators.required]
            }).controls
        );
    }
}