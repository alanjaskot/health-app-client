import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ITokenModel } from '../models/token.model';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token: ITokenModel = {
      type: this.auth.getType(),
      token: this.auth.getToken(),
    };
    console.log('token', token.token);
    if (token.token.length > 0) {
      authReq = req.clone({
        headers: req.headers
          .set(TOKEN_HEADER_KEY, token.type + ' ' + token.token)
          .set('Content-Type', 'application/json'),
      });
      console.log('token', token.type + '' + token.token);
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
