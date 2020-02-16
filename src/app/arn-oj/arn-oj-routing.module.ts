import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArnOjDefaultComponent } from './components/arn-oj-default/arn-oj-default.component';
import { ProblemDetailsComponent } from './components/problem-details/problem-details.component';


const routes: Routes = [
  {
    path: '',
    component: ArnOjDefaultComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path:':id',
    component: ProblemDetailsComponent,
    data: {
      breadcrumb: 'Problem-details',
      translate: true,
      translate_key: 'PROBLEM_DETAILS',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArnOjRoutingModule { }
