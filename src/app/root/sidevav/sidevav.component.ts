import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-sidevav',
  templateUrl: './sidevav.component.html',
  styleUrls: ['./sidevav.component.scss']
})
export class SidevavComponent implements OnDestroy {
  languages = [
    {
      "Language": "English",
      "Key": "en"
    },
    {
      "Language": "Bengali",
      "Key": "bn"
    }
  ];
  selectedLang = "en";

  mobileQuery: MediaQueryList;

  fillerNav = ['home', 'shortcut-life', 'api-integrations'];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public translate: TranslateService
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
