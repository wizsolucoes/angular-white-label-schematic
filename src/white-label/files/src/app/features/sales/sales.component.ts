import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/core/services/configuration/configuration.service';
import { SimulationService } from 'src/app/core/services/business/simulation/simulation.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  simulationResult: any;
  name: string;
  cpf: string;
  email: string;
  loanAmount: number;
  installments: number;
  id: string;
  isLoadingSimulation: boolean;

  constructor(
    private simulationService: SimulationService,
    private configurationService: ConfigurationService
  ) {}

  ngOnInit(): void {
    this.id = this.configurationService.tenantId;
  }

  onSubmit() {
    this.isLoadingSimulation = true;

    this.simulationService
      .doSimulation({
        name: this.name,
        cpf: this.cpf,
        email: this.email,
        loanAmount: this.loanAmount,
        quantity: this.installments,
      })
      .subscribe((data: any) => {
        this.simulationResult = data;
        this.isLoadingSimulation = false;
      });
  }
}
