import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  readonly apiUrl = 'http://localhost:8081/api/cartes';

  constructor(private httpClient: HttpClient) { }

  getAllCartes(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}`);
  }

  searchByCode(code: string): Observable<any[]> {
    const params = new HttpParams().set('code', code ? code : '');
    return this.httpClient.get<any[]>(`${this.apiUrl}/searchByCriteria`, { params: params });
  }
  searchByCriteria(code: string, designation: string, date: string): Observable<any[]> {
    let params = new HttpParams();
    if (code) {
      params = params.set('code', code);
    }
    if (designation) {
      params = params.set('designation', designation);
    }
    if (date) {
      params = params.set('date', date);
    }
    return this.httpClient.get<any[]>(`${this.apiUrl}/searchByCriteria`, { params: params });
  }



}
