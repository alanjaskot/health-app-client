import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBmiModel } from '../models/bmi.model';
import { envoirment } from 'src/environments/envoirment.dev';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
  params: new HttpParams(),
};

@Injectable({
  providedIn: 'root',
})
export class BmiApiService {
  constructor(private http: HttpClient) {}

  getBmis(): Observable<IBmiModel[]> {
    const url = `https://localhost:5001/api/bmi`;
    return this.http.get<IBmiModel[]>(url, httpOptions);
  }

  getDeletedBmis(userId: string, isDeleted: boolean): Observable<IBmiModel[]> {
    const url = `${envoirment.apiUrl}/bmi/deleted?userId=${userId}&isDeleted=${isDeleted}`;
    return this.http.get<IBmiModel[]>(url, httpOptions);
  }

  getBmiById(id: string): Observable<IBmiModel> {
    const url = `${envoirment.apiUrl}/bmi/${id}`;
    return this.http.get<IBmiModel>(url, httpOptions);
  }

  addBmi(toCreate: IBmiModel): Observable<IBmiModel> {
    const url = `${envoirment.apiUrl}/bmi`;
    return this.http.post<IBmiModel>(url, toCreate, httpOptions);
  }

  updateBmi(toUpdate: IBmiModel): Observable<IBmiModel> {
    const url = `${envoirment.apiUrl}/bmi`;
    return this.http.put<IBmiModel>(url, toUpdate, httpOptions);
  }

  deleteBmi(id: string): Observable<string> {
    const url = `${envoirment.apiUrl}/bmi/${id}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
