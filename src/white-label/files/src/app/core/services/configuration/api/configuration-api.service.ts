import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AppConfiguration } from '../configuration';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationApiService {
  constructor(private http: HttpClient) {}

  fetchConfig(): Observable<AppConfiguration> {
    return this.http.get(`${environment.apiUrl}/config`);
  }
}
