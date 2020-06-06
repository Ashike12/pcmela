import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoronavirusStatsDefaultComponent } from './components/coronavirus-stats-default/coronavirus-stats-default.component';


const routes: Routes = [
  {
    path: '',
    component: CoronavirusStatsDefaultComponent,
    data: {
      breadcrumb: null
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoronavirusStatsRoutingModule { }
