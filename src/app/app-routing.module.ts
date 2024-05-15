import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesModule } from './country/countries.module';

const routes: Routes = [
  {
    path: 'selector',
    loadChildren: () => import('./country/countries.module').then (module => module.CountriesModule),
  },
  {
    path: '**',
    redirectTo: 'selector'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
