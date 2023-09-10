import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginForm } from '../../forms/login.form';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthUserApiService } from '../../services/auth-user-api.service';
import { Store } from '@ngxs/store';
import { GetMe } from '../../state/user.action';
import { UserNameState } from '../../state/user.state';
import { IUserModel } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy {
  form: LoginForm = new LoginForm();
  subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private service: AuthUserApiService,
    private store: Store
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
    this.subscription.add(
      this.service
        .login(this.form.value.login, this.form.value.password)
        .subscribe((token: any) => {
          this.authService.setType(token.result.type);
          this.authService.setToken(token.result.token);
          this.getUserMe();
        })
    );
  }

  private getUserMe(): void {
    this.subscription.add(
      this.store.dispatch(new GetMe()).subscribe(() => {
        this.store.select(UserNameState.getMe).subscribe((me: IUserModel) => {});
      })
    );
  }
}
