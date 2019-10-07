import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiIntegrationsRoutingModule } from './api-integrations-routing.module';
import { ApiIntegrationsDefaultComponent } from './api-integrations-default/api-integrations-default.component';


@NgModule({
  declarations: [ApiIntegrationsDefaultComponent],
  imports: [
    CommonModule,
    ApiIntegrationsRoutingModule
  ]
})
export class ApiIntegrationsModule { }
