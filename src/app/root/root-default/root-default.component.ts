import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root-default',
  templateUrl: './root-default.component.html',
  styleUrls: ['./root-default.component.scss']
})
export class AppRootDefaultComponent {
  languages = ['en', 'bn'];
  constructor(public translate: TranslateService) {
    translate.addLangs(this.languages);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|bn/) ? browserLang : 'en');
  }
}
