import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { DreamComponent } from './components/dream/dream.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ClientsComponent } from './components/clients/clients.component';
import { CoreModule } from 'src/app/core/core.module';
import { BreakerComponent } from './components/breaker/breaker.component';
import { AboutComponent } from './components/about/about.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';

@NgModule({
  declarations: [
    HomeComponent,
    DreamComponent,
    ClientsComponent,
    HomeHeaderComponent,
    AboutComponent,
    TechnologiesComponent,
    PortfolioComponent,
    BreakerComponent,
    ServicesComponent,
    WelcomeComponent,
  ],
  imports: [CoreModule, CommonModule, HomeRoutingModule, TranslateModule, FormsModule],
})
export class HomeModule {}