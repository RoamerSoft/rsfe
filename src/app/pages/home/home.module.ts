import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { DreamComponent } from './components/dream/dream.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { MissionComponent } from './components/mission/mission.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PromiseComponent } from './components/promise/promise.component';
import { ServicesComponent } from './components/services/services.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WorkingMethodComponent } from './components/working-method/working-method.component';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ClientsComponent } from './components/clients/clients.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    HomeComponent,
    DreamComponent,
    ClientsComponent,
    HomeHeaderComponent,
    MissionComponent,
    PortfolioComponent,
    PromiseComponent,
    ServicesComponent,
    WelcomeComponent,
    WorkingMethodComponent,
  ],
  imports: [CoreModule, CommonModule, HomeRoutingModule, TranslateModule, FormsModule],
})
export class HomeModule {}
