// stat.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  constructor(private http: HttpClient) { }

  getStatistics(): Observable<any> {
    return interval(6000).pipe(
      switchMap(() => this.http.get<any>('http://localhost:8081/stats/BBS'))
    );
  }
}
