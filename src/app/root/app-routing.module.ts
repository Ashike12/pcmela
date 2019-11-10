import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data:{
      breadcrumb: "Home"
    }
  },
  {
    path: 'shortcut-life',
    loadChildren: () => import('../shortcuts-life/shortcuts-life.module').then(m => m.ShortcutsLifeModule),
    data: {
      breadcrumb: 'shortcut-life',
      translate: false,
      translate_key: 'shortcut-life',
    }
  },
  {
    path: 'api-integrations',
    loadChildren: () => import('../api-integrations/api-integrations.module').then(m => m.ApiIntegrationsModule),
    data: {
      breadcrumb: "API-Integration"
    }
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
