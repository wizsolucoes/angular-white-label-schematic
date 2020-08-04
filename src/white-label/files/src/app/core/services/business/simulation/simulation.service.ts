import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SimulationRequest } from 'src/app/shared/models/simulation-request';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  constructor(private http: HttpClient) {}

  doSimulation(request: SimulationRequest): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/v1/corporate/prospect`, {
      name: request.name,
      cpf: request.cpf,
      email: request.email,
      loanAmount: request.loanAmount,
      quantity: request.quantity,
    });
  }
}
