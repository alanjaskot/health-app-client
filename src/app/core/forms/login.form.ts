import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";

export class LoginForm extends UntypedFormGroup {
    readonly login = this.get('login') as UntypedFormControl;
    readonly password = this.get('password') as UntypedFormControl;

    constructor(readonly fb: UntypedFormBuilder = new UntypedFormBuilder()) {
        super(
            fb.group({
                login: ['', Validators.required],
                password: ['', Validators.required],
            }).controls
        );
    }
}