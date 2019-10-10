import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonMaterialModule } from "../common-module/common-material.module";
import { AppRoutingModule } from './app-routing.module';
import { ShortcutsLifeModule } from '../shortcuts-life/shortcuts-life.module';
import { AppRootDefaultComponent } from './root-default/root-default.component';
import { SidevavComponent } from './sidevav/sidevav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ApiIntegrationsModule } from '../api-integrations/api-integrations.module';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppRootDefaultComponent,
    SidevavComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonMaterialModule,
    AppRoutingModule,
    ShortcutsLifeModule,
    ApiIntegrationsModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppRootDefaultComponent]
})
export class AppModule { }
