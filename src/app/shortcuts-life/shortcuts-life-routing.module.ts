import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShortcutLifeDefaultComponent } from './shortcut-life-default/shortcut-life-default.component';
import { ShortcutLifeTextToJsonComponent } from './shortcut-life-text-to-json/shortcut-life-text-to-json.component';


const routes: Routes = [
  {
    path: '',
    component: ShortcutLifeDefaultComponent
  },
  {
    path:'text-to-json',
    component: ShortcutLifeTextToJsonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortcutsLifeRoutingModule { }
