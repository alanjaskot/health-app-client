import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { envoirment } from 'src/environments/envoirment.dev';
import { IUserModel } from '../models/user.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
  params: new HttpParams(),
};

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpClient) {}

  getMe(): Observable<IUserModel> {
    const url = `${envoirment.apiUrl}/user/me`;
    return this.http.get<IUserModel>(url, httpOptions);
  }
}
