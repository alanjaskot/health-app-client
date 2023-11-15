import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envoirment } from 'src/environments/envoirment.dev';
import { ITokenModel } from '../models/token.model';
import { ILoginModel } from '../models/login.model';
import { IRegisterModel } from '../models/register.model';
import { IUserModel } from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
  params: new HttpParams(),
};

@Injectable({
  providedIn: 'root',
})
export class AuthUserApiService {
  public isLoggedIn = false;

  constructor(private http: HttpClient) {}

  login(login: string, password: string): Observable<ITokenModel> {
    const url = `${envoirment.apiUrl}/auth/login`;
    const user: ILoginModel = {
      login: login,
      password: password,
    };
    return this.http.post<ITokenModel>(url, user, httpOptions);
  }

  logout(): Observable<boolean> {
    const url = `${envoirment.apiUrl}/auth/logout`;
    return this.http.post<boolean>(url, httpOptions);
  }

  register(userName: string, password: string): Observable<boolean> {
    const url = `${envoirment.apiUrl}/auth/register`;
    const user: IRegisterModel = {
      userName: userName,
      password: password,
    };
    console.log('user name =>', user);
    return this.http.post<boolean>(url, user, httpOptions);
  }
}
