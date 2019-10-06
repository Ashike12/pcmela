import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonMaterialModule } from "../common-module/common-material.module";
import { AppRoutingModule } from './app-routing.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppRootDefaultComponent } from './root-default/root-default.component';
import { SidevavComponent } from './sidevav/sidevav.component';

@NgModule({
  declarations: [
    AppRootDefaultComponent,
    SidevavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonMaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppRootDefaultComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
