import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
    isolate: false
}),
  ],
  exports: [TranslateModule],
})
export class SharedTranslateModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedTranslateModule,
      providers: []
    };
  }
}
