import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private readonly http: HttpClient) {}

  public doGet<T>(serviceUrl: string): Observable<T> {
    return this.getObservableWithOperators(
      this.http.get(serviceUrl) as Observable<T>
    );
  }

  public doPost<T, R>(serviceUrl: string, body: T): Observable<R> {
    return this.getObservableWithOperators(
      this.http.post<R>(serviceUrl, body)
    );
  }

  private getObservableWithOperators<T>(observable: Observable<T>): Observable<T> {
    return observable.pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        return of();
      })
    );
  }
}
