import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  constructor(private http: HttpClient) {}

  performOperation(a: number, b: number, id: string) {
    return this.http.post(`${environment.apiUrl}/api/v1/corporate`, {
      a,
      b,
    });
  }
}
