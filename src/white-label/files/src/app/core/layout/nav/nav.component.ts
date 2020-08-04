import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../services/configuration/configuration.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  features: string[];
  logoUrl: string;

  constructor(private configurationService: ConfigurationService) {}

  ngOnInit(): void {
    this.configurationService.getConfig().subscribe((data) => {
      this.features = data.features;
      this.logoUrl = data.logoImageUrl;
    });
  }

  isFeatureEnabled(key: string): boolean {
    return !!this.features && this.features.includes(key);
  }
}
