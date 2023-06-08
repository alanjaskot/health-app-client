import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITokenModel } from '../models/token.model';
import { AuthState } from '../state/auth.state';
import { Select } from '@ngxs/store';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  @Select(AuthState.getToken) getToken$: Observable<ITokenModel>;

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    let token: ITokenModel = { type: '', token: '' };

    this.getToken$.subscribe((stateToken: ITokenModel) => {
      if (token) {
        token = stateToken;
      }
    });

    authReq = req.clone({
      headers: req.headers
        .set(TOKEN_HEADER_KEY, token.type + ' ' + token.token)
        .set('Content-Type', 'application/json'),
    });

    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
