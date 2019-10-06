import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortcutsLifeRoutingModule } from './shortcuts-life-routing.module';
import { ShortcutLifeDefaultComponent } from './shortcut-life-default/shortcut-life-default.component';


@NgModule({
  declarations: [ShortcutLifeDefaultComponent],
  imports: [
    CommonModule,
    ShortcutsLifeRoutingModule
  ]
})
export class ShortcutsLifeModule { }
