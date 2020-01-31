import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiIntegrationsDefaultComponent } from './components/api-integrations-default/api-integrations-default.component';
import { GoogleMapApiComponent } from './components/google-map-api/google-map-api.component';


const routes: Routes = [
  {
    path: '',
    component: ApiIntegrationsDefaultComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path:'google-map-api',
    component: GoogleMapApiComponent,
    data: {
      breadcrumb: 'google-map-api',
      translate: true,
      translate_key: 'GOOGLE_MAP_API',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiIntegrationsRoutingModule { }
