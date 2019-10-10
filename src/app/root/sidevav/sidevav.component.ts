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

  mobileQuery: MediaQueryList;

  fillerNav = ['home', 'shortcut-life', 'api-integrations'];

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

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
