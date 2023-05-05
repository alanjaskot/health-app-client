import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBloodPressure } from '../models/blood-pressure.model';
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
export class BloodPressureService {
  constructor(private http: HttpClient) {}

  getAllBloodPressures(): Observable<IBloodPressure[]> {
    const url = `${envoirment.apiUrl}/blood-pressure`;
    return this.http.get<IBloodPressure[]>(url, httpOptions);
  }

  getDeletedBloodPressures(id: string, isDeleted: boolean): Observable<IBloodPressure[]> {
    const url = `${envoirment.apiUrl}/blood-pressure/get-deleted?userId=${id}&isDeleted=${isDeleted}`;
    return this.http.get<IBloodPressure[]>(url, httpOptions);
  }

  getBloodPressureById(id: string): Observable<IBloodPressure> {
    const url = `${envoirment.apiUrl}/blood-pressure/${id}`;
    return this.http.get<IBloodPressure>(url, httpOptions);
  }

  addBloodPressure(toCreate: IBloodPressure): Observable<IBloodPressure> {
    const url = `${envoirment.apiUrl}/blood-pressure`;
    return this.http.post<IBloodPressure>(url, toCreate, httpOptions);
  }

  editBloodPressure(toUpdate: IBloodPressure): Observable<IBloodPressure> {
    const url = `${envoirment.apiUrl}/blood-pressure`;
    return this.http.put<IBloodPressure>(url, toUpdate, httpOptions);
  }

  deleteBloodPressure(id: string): Observable<boolean> {
    const url = `${envoirment.apiUrl}/blood-pressure/${id}`;
    return this.http.delete<boolean>(url, httpOptions);
  }
}
