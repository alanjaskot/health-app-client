import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envoirment } from 'src/environments/envoirment.dev';
import { ITokenModel } from '../models/token.model';
import { ILoginModel } from '../models/login.model';
import { IRegisterModel } from '../models/register.model';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
  params: new HttpParams(),
};

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  public isLoggedIn = false;
  type: string;
  token: string;

  constructor(private http: HttpClient) {}

  login(login: string, password: string): Observable<ITokenModel> {
    const url = `${envoirment.apiUrl}/auth/login`;
    const user: ILoginModel = {
      login: login,
      password: password,
    };
    return this.http.post<ITokenModel>(url, user, httpOptions);
  }

  logout() {
    const url = `${envoirment.apiUrl}/auth/logout`;
    return this.http.post(url, true, httpOptions);
  }

  register(userName: string, password: string): void {
    const url = `${envoirment.apiUrl}/auth/registration`;
    const user: IRegisterModel = {
      userName: userName,
      password: password,
    };
    this.http.post(url, user, httpOptions);
  }
}
