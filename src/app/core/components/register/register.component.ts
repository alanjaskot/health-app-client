import { Component } from '@angular/core';
import { RegisterForm } from '../../forms/register.form';
import { AuthUserService } from '../../services/auth-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: RegisterForm = new RegisterForm();

  constructor(private userService: AuthUserService) {}

  registerUser(): void {
    if (!this.form.valid) {
      return;
    }

    if (this.form.password.value != this.form.confirmPassword.value) {
      return;
    }

    this.userService.register(this.form.userName.value, this.form.password.value);
  }
}
