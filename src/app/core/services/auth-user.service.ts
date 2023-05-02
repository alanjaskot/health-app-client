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
  url = envoirment.apiUrl;
  type: string;
  token: string;

  constructor(private http: HttpClient) {}

  login(login: string, password: string): Observable<ITokenModel> {
    const user: ILoginModel = {
      login: login,
      password: password,
    };
    return this.http.post<ITokenModel>(`${this.url}/auth/login`, user, httpOptions);
  }

  logout() {
    return this.http.post(`${envoirment.apiUrl}/logout`, true, httpOptions);
  }

  register(userName: string, password: string): void {
    const user: IRegisterModel = {
      userName: userName,
      password: password,
    };
    this.http.post(`${this.url}/auth/registration`, user, httpOptions);
  }

  setAuthUserData(type, token): void {
    this.type = type;
    this.token = token;
    this.isLoggedIn = true;
  }

  public getAuthUserData(): ITokenModel {
    return {
      token: this.token,
      type: this.type,
    };
  }
}
