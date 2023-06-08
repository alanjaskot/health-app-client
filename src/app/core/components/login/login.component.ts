import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginForm } from '../../forms/login.form';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthUserApiService } from '../../services/auth-user-api.service';
import { Store } from '@ngxs/store';
import { Login } from '../../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy {
  form: LoginForm = new LoginForm();
  subscription = new Subscription();

  constructor(
    private store: Store,
    private service: AuthUserApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

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
    this.store.dispatch(new Login(this.form.login.value, this.form.password.value));
  }
}
