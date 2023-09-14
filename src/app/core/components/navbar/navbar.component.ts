import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNameState } from '../../state/user.state';
import { Observable, Subscription } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { IUserModel } from '../../models/user.model';
import { GetMe } from '../../state/user.action';
import { AuthService } from '../../services/auth.service';
import { AuthUserApiService } from '../../services/auth-user-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements DoCheck, OnInit, OnDestroy {
  @Select(UserNameState.getMe) fetchMe$: Observable<IUserModel>;

  me: IUserModel;
  firstLetterUserName: string;
  isLoggedIn = false;

  private subscription = new Subscription();

  constructor(
    private auth: AuthUserApiService,
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.setUser();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngDoCheck(): void {
    if (this.isLoggedIn == false) {
      if (this.checkLogin()) this.getUserMe();
    }
  }

  routeTo(): void {
    this.router.navigate(['/login']);
  }

  logout(): void {
    this.auth.logout();
    this.authService.removeType();
    this.authService.removeToken();
    this.setUser();
    this.isLoggedIn = false;
  }

  private checkLogin(): boolean {
    const token = this.authService.getToken();
    if (token) return (this.isLoggedIn = true);

    return false;
  }

  private getUserMe(): void {
    this.subscription.add(
      this.store.dispatch(new GetMe()).subscribe(() => {
        this.store.select(UserNameState.getMe).subscribe((me: IUserModel) => {
          if (me) {
            this.me = me;
            this.setFirstLetter();
          } else this.setUser();
        });
      })
    );
  }

  private setUser(): void {
    this.me = {
      id: '',
      userName: '',
      email: '',
      height: 0,
      loginCounter: 0,
      lastLogin: new Date(),
      created: new Date(),
    };
  }

  private setFirstLetter(): void {
    this.firstLetterUserName = this.me.userName[0].toUpperCase();
  }
}
