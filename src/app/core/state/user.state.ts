import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { IUserModel } from '../models/user.model';
import { Injectable } from '@angular/core';
import { UserApiService } from '../services/user-api.service';
import { GetMe } from './user.action';
import { tap } from 'rxjs/operators';

export interface UserMeStateModel {
  meUser: IUserModel;
}

const USER_NAME_STATE_MODEL = new StateToken<IUserModel>('userNameState');

@State<UserMeStateModel>({
  name: USER_NAME_STATE_MODEL,
  defaults: {
    meUser: {
      id: '',
      userName: '',
      email: '',
      height: 0,
      loginCounter: 0,
      lastLogin: undefined,
      created: undefined,
    },
  },
})
@Injectable({
  providedIn: 'root',
})
export class UserNameState {
  constructor(private service: UserApiService) {}

  @Action(GetMe, { cancelUncompleted: true })
  loadUserName({ getState, setState }: StateContext<UserMeStateModel>) {
    return this.service.getMe().pipe(
      tap((meUser: IUserModel) => {
        const state = getState();
        setState({
          ...state,
          meUser,
        });
      })
    );
  }

  @Selector()
  static getMe(state: UserMeStateModel) {
    return state.meUser;
  }
}
