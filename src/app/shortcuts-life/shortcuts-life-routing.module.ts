import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShortcutLifeDefaultComponent } from './shortcut-life-default/shortcut-life-default.component';


const routes: Routes = [
  {
    path: '',
    component: ShortcutLifeDefaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortcutsLifeRoutingModule { }
