import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FilmsComponent } from './films/films.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { ContactComponent } from './contact/contact.component';
import { PricelistComponent } from './pricelist/pricelist.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    NavigationComponent,
    FilmsComponent,
    CinemasComponent,
    ContactComponent,
    PricelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
