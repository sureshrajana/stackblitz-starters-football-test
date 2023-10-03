import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './pages/home-container/home-container.component';
import { TeamResultsComponent } from './pages/team-results/team-results.component';
import { CountryServiceModule } from './services/country/country.service.module';
import { FixtureServiceModule } from './services/fixture/fixture.service.module';
import { LeagueServiceModule } from './services/league/league.service.module';
import { SecureStorageServiceModule } from './services/secure-storage/secure-storage.service.module';
import { StandingsServiceModule } from './services/standings/standings.service.module';
import { TeamServiceModule } from './services/team/team.service.module';
import { HeaderComponent } from './shared-components/header/header.component';
import { StandingsComponent } from './shared-components/standings/standings.component';
import { TeamResultsCardComponent } from './shared-components/team-results-card/team-results-card.component';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HeaderComponent,
    StandingsComponent,
    TeamResultsComponent,
    TeamResultsCardComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CountryServiceModule,
    StandingsServiceModule,
    LeagueServiceModule,
    FixtureServiceModule,
    TeamServiceModule,
    SecureStorageServiceModule
  ],
  providers: [CountryServiceModule, FixtureServiceModule, LeagueServiceModule, StandingsServiceModule, TeamServiceModule, SecureStorageServiceModule]
})
export class HomeModule { }
