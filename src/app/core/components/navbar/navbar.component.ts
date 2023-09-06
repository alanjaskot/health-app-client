import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNameState } from '../../state/user.state';
import { Observable, Subscription } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { IUserModel } from '../../models/user.model';
import { GetMe } from '../../state/user.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Select(UserNameState.getMe) fetchMe$: Observable<IUserModel>;

  me: IUserModel;

  private subscription = new Subscription();

  constructor(private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.getUserMe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  routeTo(): void {
    this.router.navigate(['/login']);
  }

  private getUserMe(): void {
    this.subscription.add(
      this.store.dispatch(new GetMe()).subscribe(() => {
        this.store.select(UserNameState.getMe).subscribe((me: IUserModel) => {
          if (me) this.me = me;
          else this.setUser();
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
}
