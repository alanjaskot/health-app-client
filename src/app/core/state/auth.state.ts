import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { ITokenModel } from '../models/token.model';
import { Injectable, NgZone } from '@angular/core';
import { AuthUserApiService } from '../services/auth-user-api.service';
import { Router } from '@angular/router';
import { Login, Logout } from './auth.actions';
import { tap } from 'rxjs';

export interface AuthStateModel {
  isLoggedIn: boolean;
  token: ITokenModel;
}

const AUTH_STATE_TOKEN = new StateToken<AuthStateModel>('stateToken');
const navigate = '/';

@State<AuthStateModel>({
  name: AUTH_STATE_TOKEN,
  defaults: {
    isLoggedIn: false,
    token: { type: '', token: '' },
  },
})
@Injectable({
  providedIn: 'root',
})
export class AuthState {
  constructor(private service: AuthUserApiService, private router: Router, private zone: NgZone) {}

  @Action(Login, { cancelUncompleted: true })
  login({ getState, setState }: StateContext<AuthStateModel>, { login, password }) {
    return this.service.login(login, password).pipe(
      tap((token: any) => {
        const state = getState();
        setState({
          ...state,
          isLoggedIn: true,
          token: { type: token.result.type, token: token.result.token },
        });
        this.zone.run(() => {
          this.router.navigate([navigate]);
        });
      })
    );
  }

  @Action(Logout, { cancelUncompleted: true })
  logout({ setState }: StateContext<AuthStateModel>) {
    return this.service.logout().pipe(
      tap(() => {
        setState({
          isLoggedIn: false,
          token: null,
        });
        this.zone.run(() => {
          this.router.navigate(['/login']);
        });
      })
    );
  }

  @Selector()
  static getToken(state: AuthStateModel) {
    return state.token;
  }
}
