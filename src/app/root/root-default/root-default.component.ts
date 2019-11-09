import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root-default',
  templateUrl: './root-default.component.html',
  styleUrls: ['./root-default.component.scss']
})
export class AppRootDefaultComponent implements OnInit {
  languages = ['en', 'bn'];
  constructor(public translate: TranslateService, private route:Router, private activeRoute:ActivatedRoute) {
    translate.addLangs(this.languages);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|bn/) ? browserLang : 'en');
  }
  ngOnInit(): void {
    
  }
}
