import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShortcutLifeDefaultComponent } from './components/shortcut-life-default/shortcut-life-default.component';
import { ShortcutLifeTextToJsonComponent } from './components/shortcut-life-text-to-json/shortcut-life-text-to-json.component';
import { ShortcutLifeUploadQuestionComponent } from './components/shortcut-life-upload-question/shortcut-life-upload-question.component';


const routes: Routes = [
  {
    path: '',
    component: ShortcutLifeDefaultComponent,
    data: {
      breadcrumb: null,
      translate: false,
      translate_key: '',
    }
  },
  {
    path: 'text-to-json',
    component: ShortcutLifeTextToJsonComponent,
    data: {
      breadcrumb: 'text-to-json',
      translate: true,
      translate_key: 'text-to-json',
    }
  },
  {
    path: 'upload-questions',
    component: ShortcutLifeUploadQuestionComponent,
    data: {
      breadcrumb: 'upload-questions',
      translate: true,
      translate_key: 'upload-questions',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortcutsLifeRoutingModule { }
