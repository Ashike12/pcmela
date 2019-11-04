import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortcutsLifeRoutingModule } from './shortcuts-life-routing.module';
import { ShortcutLifeDefaultComponent } from './shortcut-life-default/shortcut-life-default.component';
import { CommonMaterialModule } from '../common-module/common-material.module';
import { ShortcutLifeTextToJsonComponent } from './shortcut-life-text-to-json/shortcut-life-text-to-json.component';
import { SharedTranslateModule } from '../common-module/shared-translate.module';
import { FormsModule } from '@angular/forms';
import { ShortcutLifeTextToJsonService } from '../service/shortcuts-life/shortcut-life-text-to-json.service';
import { ShortcutLifeUploadQuestionComponent } from './shortcut-life-upload-question/shortcut-life-upload-question.component';


@NgModule({
  declarations: [ShortcutLifeDefaultComponent, ShortcutLifeTextToJsonComponent, ShortcutLifeUploadQuestionComponent],
  imports: [
    CommonModule,
    CommonMaterialModule,
    ShortcutsLifeRoutingModule,
    SharedTranslateModule,
    FormsModule
  ],
  providers: [ShortcutLifeTextToJsonService]
})
export class ShortcutsLifeModule { }
