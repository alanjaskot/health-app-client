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
export class MedicineApiService {
  constructor(private http: HttpClient) {}

  getAllMedicines(): Observable<IMedicineModel[]> {
    const url = `${envoirment.apiUrl}/health/medicine`;
    return this.http.get<IMedicineModel[]>(url, httpOptions);
  }

  getDeletedMedicines(userId: string, isDeleted: boolean): Observable<IMedicineModel[]> {
    const url = `${envoirment.apiUrl}/health/medicine/deleted?userId=${userId}&idDeleted=${isDeleted}`;
    return this.http.get<IMedicineModel[]>(url, httpOptions);
  }

  getMedicineById(id: string): Observable<IMedicineModel> {
    const url = `${envoirment.apiUrl}/health/medicine/${id}`;
    return this.http.get<IMedicineModel>(url, httpOptions);
  }

  addMedicine(toCreate: IMedicineModel): Observable<IMedicineModel> {
    const url = `${envoirment.apiUrl}/health/medicine`;
    return this.http.post<IMedicineModel>(url, toCreate, httpOptions);
  }

  updateMedicine(toUpdate: IMedicineModel): Observable<IMedicineModel> {
    const url = `${envoirment.apiUrl}/health/medicine/edit`;
    return this.http.put<IMedicineModel>(url, toUpdate, httpOptions);
  }

  deleteMedicine(id: string): Observable<boolean> {
    const url = `${envoirment.apiUrl}/health/medicine/delete/${id}`;
    return this.http.delete<boolean>(url, httpOptions);
  }
}
