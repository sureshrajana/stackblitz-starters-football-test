import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './pages/home-container/home-container.component';
import { TeamResultsComponent } from './pages/team-results/team-results.component';

const routes: Routes = [
  {
    path: 'team/:leagueId/:teamId/:currentYear',
    component: TeamResultsComponent,
  },
  {
    path: 'home/:leagueId',
    component: HomeContainerComponent,
  },
  {
    path: '',
    component: HomeContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
