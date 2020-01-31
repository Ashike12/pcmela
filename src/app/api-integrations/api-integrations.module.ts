import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiIntegrationsRoutingModule } from './api-integrations-routing.module';
import { ApiIntegrationsDefaultComponent } from './components/api-integrations-default/api-integrations-default.component';
import { GoogleMapApiComponent } from './components/google-map-api/google-map-api.component';
import { SharedTranslateModule } from '../common-module/shared-translate.module';
import { CommonMaterialModule } from '../common-module/common-material.module';
import { GithubApiComponent } from './components/github-api/github-api.component';


@NgModule({
  declarations: [ApiIntegrationsDefaultComponent, GoogleMapApiComponent, GithubApiComponent],
  imports: [
    CommonModule,
    ApiIntegrationsRoutingModule,
    SharedTranslateModule,
    CommonMaterialModule
  ]
})
export class ApiIntegrationsModule { }
