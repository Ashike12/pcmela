import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiIntegrationsRoutingModule } from './api-integrations-routing.module';
import { ApiIntegrationsDefaultComponent } from './api-integrations-default/api-integrations-default.component';
import { GoogleMapApiComponent } from './google-map-api/google-map-api.component';
import { SharedTranslateModule } from '../common-module/shared-translate.module';
import { CommonMaterialModule } from '../common-module/common-material.module';


@NgModule({
  declarations: [ApiIntegrationsDefaultComponent, GoogleMapApiComponent],
  imports: [
    CommonModule,
    ApiIntegrationsRoutingModule,
    SharedTranslateModule,
    CommonMaterialModule
  ]
})
export class ApiIntegrationsModule { }
