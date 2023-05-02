import { Component } from '@angular/core';
import { RegisterForm } from '../../forms/register.form';
import { AuthUserService } from '../../services/auth-user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: RegisterForm = new RegisterForm();

  constructor(private userService: AuthUserService, private toastr: ToastrService) {}

  registerUser(): void {
    if (!this.form.valid) {
      console.log('invalid form', this.form);
      return;
    }

    if (this.form.password.value != this.form.confirmPassword.value) {
      this.toastr.error('passwords are not the same');
      console.log('password form', this.form);
      return;
    }

    console.log('valid form', this.form);
    const zupa = this.userService.register(this.form.userName.value, this.form.password.value);
    console.log('zupa =>', zupa);
  }
}
