import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortcutsLifeRoutingModule } from './shortcuts-life-routing.module';
import { ShortcutLifeDefaultComponent } from './components/shortcut-life-default/shortcut-life-default.component';
import { CommonMaterialModule } from '../common-module/common-material.module';
import { ShortcutLifeTextToJsonComponent } from './components/shortcut-life-text-to-json/shortcut-life-text-to-json.component';
import { SharedTranslateModule } from '../common-module/shared-translate.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortcutLifeTextToJsonService } from '../service/shortcuts-life/shortcut-life-text-to-json.service';
import { ShortcutLifeUploadQuestionComponent } from './components/shortcut-life-upload-question/shortcut-life-upload-question.component';
import { CommonService } from '../service/common/common.service';
import { ShortcutLifeService } from '../service/shortcuts-life/shortcut-life.service';


@NgModule({
  declarations: [ShortcutLifeDefaultComponent, ShortcutLifeTextToJsonComponent, ShortcutLifeUploadQuestionComponent],
  imports: [
    CommonModule,
    CommonMaterialModule,
    ShortcutsLifeRoutingModule,
    SharedTranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShortcutLifeTextToJsonService, CommonService, ShortcutLifeService]
})
export class ShortcutsLifeModule { }
