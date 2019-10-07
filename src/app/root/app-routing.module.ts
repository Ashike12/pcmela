import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'shortcut-life',
    loadChildren: () => import('../shortcuts-life/shortcuts-life.module').then(m => m.ShortcutsLifeModule)
  },
  {
    path: 'api-integrations',
    loadChildren: () => import('../api-integrations/api-integrations.module').then(m => m.ApiIntegrationsModule)
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
