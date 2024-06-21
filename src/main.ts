import { bootstrapApplication } from '@angular/platform-browser';
import { portfolioConfig } from './portfolio/portfolio.config';
import { PortfolioComponent } from './portfolio/portfolio.component';

bootstrapApplication(PortfolioComponent, portfolioConfig).catch((err) =>
  console.error(err),
);
