import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { envoirment } from "src/environments/envoirment.dev";
import { IFinancialOperation } from "../models/financial-operation";

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
  params: new HttpParams(),
};

@Injectable({
    providedIn: 'root'
})
export class FinancialOperationApiService {
    constructor(private http: HttpClient) {}

    getOperationsByPages(pageSize: number, pageNumber: number): Observable<IFinancialOperation[]> {
        const url = `${envoirment.apiUrl}/finance/operations/${pageSize}&${pageNumber}`;
        return this.http.get<IFinancialOperation[]>(url, httpOptions);
    }

    getOperationsByDates(
        from: Date,
        to: Date,
        pageSize: number, 
        pageNumber: number,
        ): Observable<IFinancialOperation[]> {
        const url = `${envoirment.apiUrl}/finance/operation/${from}&${to}&${pageSize}&${pageNumber}`;
        return this.http.get<IFinancialOperation[]>(url, httpOptions);
    }

    getOperationById(id: string): Observable<IFinancialOperation> {
        const url = `${envoirment.apiUrl}/finance/operation/${id}`;
        return this.http.get<IFinancialOperation>(url, httpOptions);
    }

    addOperation(toCreate: IFinancialOperation): Observable<IFinancialOperation> {
        const url = `${envoirment.apiUrl}/finance/operation`;
        return this.http.post<IFinancialOperation>(url, toCreate, httpOptions);
    }

    updateOperation(toUpdate: IFinancialOperation): Observable<IFinancialOperation> {
        const url = `${envoirment.apiUrl}/finance/operation`;
        return this.http.put<IFinancialOperation>(url, toUpdate, httpOptions);
    }

    deleteOperation(id: string): Observable<IFinancialOperation> {
        const url = `${envoirment.apiUrl}/finance/operation/${id}`;
        return this.http.delete<IFinancialOperation>(url, httpOptions);
    }

    undoDeleteOperation(id: string): Observable<IFinancialOperation> {
        const url = `${envoirment.apiUrl}/finance/operation/undo/${id}`;
        return this.http.delete<IFinancialOperation>(url, httpOptions);
    }
}