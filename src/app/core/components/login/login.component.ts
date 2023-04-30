import { Component, OnInit } from '@angular/core';
import { ITokenModel } from '../../models/token.model';
import { UserService } from '../../services/auth-user.service';
import { LoginForm } from '../../forms/login.form';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  token: ITokenModel = { type: '', token: ''};
  form: LoginForm = new LoginForm();
  subscription = new Subscription();

  constructor(private service: UserService, private router: Router) {}

  login(): void {
    if (!this.form.valid) {
      return;
    }
      
    this.requestLogin();
  }

  watchMems(): void {
    window.location.href = 'http://jbzd.com.pl';
  }

  private requestLogin(): void {
    this.subscription = this.service.login(this.form.value.login, this.form.value.password)
                                    .subscribe((token: ITokenModel) => {
                                      this.token = token;
                                    });
  }
}
