import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApplicationServiceService {

  constructor(private http: HttpClient) { }

/**
   * function to get task info
   * @param params: query params
   */
  getTaskInfo = (params?: any, headers?: any): Observable<any> => {
    return this.http.get('http://localhost:9000/aliens/', { params, headers })
      .pipe(
        map((response: any) => {
          if (response) {
            return response;
          }
          return null;
        })
      );
  }
}
