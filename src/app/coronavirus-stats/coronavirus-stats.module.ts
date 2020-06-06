import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoronavirusStatsRoutingModule } from './coronavirus-stats-routing.module';
import { CoronavirusStatsDefaultComponent } from './components/coronavirus-stats-default/coronavirus-stats-default.component';
import { CoronavirusStatsLocalComponent } from './components/coronavirus-stats-local/coronavirus-stats-local.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonMaterialModule } from '../common-module/common-material.module';
import { SharedTranslateModule } from '../common-module/shared-translate.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CoronavirusStatsDefaultComponent, CoronavirusStatsLocalComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CommonMaterialModule,
    SharedTranslateModule,
    HttpClientModule,
    CoronavirusStatsRoutingModule
  ]
})
export class CoronavirusStatsModule { }
