import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonMaterialModule } from "../common-module/common-material.module";
import { AppRoutingModule } from './app-routing.module';
import { ShortcutsLifeModule } from '../shortcuts-life/shortcuts-life.module';
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
    ShortcutsLifeModule
  ],
  providers: [],
  bootstrap: [AppRootDefaultComponent]
})
export class AppModule { }
