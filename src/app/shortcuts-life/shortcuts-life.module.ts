import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortcutsLifeRoutingModule } from './shortcuts-life-routing.module';
import { ShortcutLifeDefaultComponent } from './shortcut-life-default/shortcut-life-default.component';
import { CommonMaterialModule } from '../common-module/common-material.module';
import { ShortcutLifeTextToJsonComponent } from './shortcut-life-text-to-json/shortcut-life-text-to-json.component';
import { SharedTranslateModule } from '../common-module/shared-translate.module';


@NgModule({
  declarations: [ShortcutLifeDefaultComponent, ShortcutLifeTextToJsonComponent],
  imports: [
    CommonModule,
    CommonMaterialModule,
    ShortcutsLifeRoutingModule,
    SharedTranslateModule
  ]
})
export class ShortcutsLifeModule { }
