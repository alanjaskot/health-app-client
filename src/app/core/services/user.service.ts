import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envoirment } from 'src/environments/envoirment.dev';
import { ITokenModel } from '../models/token.model';

@Injectable({
   providedIn: 'root',
})
export class UserService {
   headers = { 'content-type': 'application/json' };
   url = `${envoirment.apiUrl}/auth`;

   constructor(private http: HttpClient) {}

   login(login: string, password: string): Observable<ITokenModel> {
      const user = { login: login, password: password};
      return this.http.post<ITokenModel>(`${this.url}/login`, user);
   }
}
