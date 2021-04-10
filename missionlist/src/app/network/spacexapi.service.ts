import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  private REST_API_SERVER = "https://api.spacexdata.com/v3/launches";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.REST_API_SERVER)
      .pipe(
        catchError(this.handleError<Mission[]>('getMissions', []))
      );
  }

  getHeroNo404<Data>(id: number): Observable<Mission> {
    const url = `${this.REST_API_SERVER}/?id=${id}`;
    return this.http.get<Mission[]>(url)
      .pipe(
        map(missionList => missionList[0]), // returns a {0|1} element array
        catchError(this.handleError<Mission>(`getMission id=${id}`))
      );
  }

  getMission(flight_number: number): Observable<Mission> {
    const url = `${this.REST_API_SERVER}/${flight_number}`;
    return this.http.get<Mission>(url).pipe(
      catchError(this.handleError<Mission>(`getMission flight_number=${flight_number}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
