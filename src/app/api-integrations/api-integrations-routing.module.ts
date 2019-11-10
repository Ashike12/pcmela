import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiIntegrationsDefaultComponent } from './api-integrations-default/api-integrations-default.component';


const routes: Routes = [
  {
    path: '',
    component: ApiIntegrationsDefaultComponent,
    data: {
      breadcrumb: null
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiIntegrationsRoutingModule { }
