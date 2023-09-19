import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBloodPressureModel } from '../models/blood-pressure.model';
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
export class BloodPressureApiService {
  constructor(private http: HttpClient) {}

  getAllBloodPressures(): Observable<IBloodPressureModel[]> {
    const url = `${envoirment.apiUrl}/health/blood-pressure`;
    return this.http.get<IBloodPressureModel[]>(url, httpOptions);
  }

  getDeletedBloodPressures(id: string, isDeleted: boolean): Observable<IBloodPressureModel[]> {
    const url = `${envoirment.apiUrl}/health/blood-pressure/get-deleted?userId=${id}&isDeleted=${isDeleted}`;
    return this.http.get<IBloodPressureModel[]>(url, httpOptions);
  }

  getBloodPressureById(id: string): Observable<IBloodPressureModel> {
    const url = `${envoirment.apiUrl}/health/blood-pressure/${id}`;
    return this.http.get<IBloodPressureModel>(url, httpOptions);
  }

  addBloodPressure(toCreate: IBloodPressureModel): Observable<IBloodPressureModel> {
    const url = `${envoirment.apiUrl}/health/blood-pressure`;
    return this.http.post<IBloodPressureModel>(url, toCreate, httpOptions);
  }

  updateBloodPressure(toUpdate: IBloodPressureModel): Observable<IBloodPressureModel> {
    const url = `${envoirment.apiUrl}/health/blood-pressure`;
    return this.http.put<IBloodPressureModel>(url, toUpdate, httpOptions);
  }

  deleteBloodPressure(id: string): Observable<boolean> {
    const url = `${envoirment.apiUrl}/halth/blood-pressure/${id}`;
    return this.http.delete<boolean>(url, httpOptions);
  }
}
