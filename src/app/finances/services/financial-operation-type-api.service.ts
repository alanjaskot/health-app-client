import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { envoirment } from "src/environments/envoirment.dev";
import { IFinancialOperationType } from "../models/financial-operation-type";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
  params: new HttpParams(),
};

@Injectable({
    providedIn: 'root',
})
export class FinancialOperationTypeApiService {
    constructor(private http: HttpClient) {}

    getAllCategories(): Observable<IFinancialOperationType[]> {
        const url = `${envoirment.apiUrl}/finance/category`;
        return this.http.get<IFinancialOperationType[]>(url, httpOptions);
    }

    getCategoryById(id: string): Observable<IFinancialOperationType> {
        const url = `${envoirment.apiUrl}/finance/category/${id}`;
        return this.http.get<IFinancialOperationType>(url, httpOptions);
    }

    addCategory(toCreate: IFinancialOperationType): Observable<IFinancialOperationType> {
        const url = `${envoirment.apiUrl}/finance/category`;
        return this.http.post<IFinancialOperationType>(url, toCreate, httpOptions);
    }

    updateCategory(toUpdate: IFinancialOperationType): Observable<IFinancialOperationType> {
        const url = `${envoirment.apiUrl}/finance/category`;
        return this.http.put<IFinancialOperationType>(url, toUpdate, httpOptions);
    }

    deleteCategory(id: string): Observable<boolean> {
        const url = `${envoirment.apiUrl}/finance/category/${id}`;
        return this.http.delete<boolean>(url, httpOptions);
    }
}