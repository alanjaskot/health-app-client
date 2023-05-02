import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMedicineModel } from '../models/medicine.model';
import { Observable } from 'rxjs';
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
export class MedicineService {
  constructor(private http: HttpClient) {}

  url = `${envoirment.apiUrl}/medicine`;

  getAllMedicines(): Observable<IMedicineModel[]> {
    return this.http.get<IMedicineModel[]>(this.url, httpOptions);
  }

  getDeletedMedicines(userId: string, isDeleted: boolean): Observable<IMedicineModel[]> {
    const deletedMedicinesUrl = `${this.url}/deleted?userId=${userId}&idDeleted=${isDeleted}`;
    return this.http.get<IMedicineModel[]>(deletedMedicinesUrl, httpOptions);
  }

  getMedicineById(id: string): Observable<IMedicineModel> {
    return this.http.get<IMedicineModel>(`${this.url}/${id}`, httpOptions);
  }

  addMedicine(toCreate: IMedicineModel): Observable<IMedicineModel> {
    return this.http.post<IMedicineModel>(`${this.url}`, toCreate, httpOptions);
  }

  updateMedicine(toUpdate: IMedicineModel): Observable<IMedicineModel> {
    return this.http.put<IMedicineModel>(this.url, toUpdate, httpOptions);
  }

  deleteMedicine(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${id}`, httpOptions);
  }
}
