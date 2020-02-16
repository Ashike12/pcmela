import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArnOjRoutingModule } from './arn-oj-routing.module';
import { ArnOjDefaultComponent } from './components/arn-oj-default/arn-oj-default.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailsComponent } from './components/problem-details/problem-details.component';
import { SubmitProblemModalComponent } from './components/submit-problem-modal/submit-problem-modal.component';
import { SharedTranslateModule } from '../common-module/shared-translate.module';
import { CommonMaterialModule } from '../common-module/common-material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ArnOjDefaultComponent, ProblemListComponent, ProblemDetailsComponent, SubmitProblemModalComponent],
  imports: [
    CommonModule,
    CommonMaterialModule,
    SharedTranslateModule,
    HttpClientModule,
    ArnOjRoutingModule
  ]
})
export class ArnOjModule { }
