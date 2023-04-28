import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envoirment } from 'src/environments/envoirment.dev';
import { ITokenModel } from '../models/token.model';
import { IUserAuthModel } from '../models/user-auth.model';

const headers = { 'content-type': 'application/json' };

@Injectable({
   providedIn: 'root',
})
export class UserService {
   url = `${envoirment.apiUrl}/auth`;

   constructor(private http: HttpClient) {}

   login(login: string, password: string): Observable<ITokenModel> {
      const user: IUserAuthModel = { 
         login: login, 
         password: password};
      return this.http.post<ITokenModel>(`${this.url}/login`, user, { headers });
   }

   logout() {
      return this.http.post(`${envoirment.apiUrl}/logout`, true, { headers });
   }

   register(userName: string, password: string): Observable<boolean> {
      const user: IUserAuthModel = {
         userName: userName,
         password: password
      };

      return this.http.post<boolean>(`${this.url}/register`, user, { headers })
   }
}
