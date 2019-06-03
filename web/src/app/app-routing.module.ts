import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { FilmsComponent } from './films/films.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'start', component: StartComponent},
  { path: 'films', component: FilmsComponent},
  { path: 'cinemas', component: CinemasComponent},
  { path: 'pricelist', component: PricelistComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: 'start', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
