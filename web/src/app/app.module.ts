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
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PromisedFilmsBallComponent } from './promised-films-ball/promised-films-ball.component';
import { PromisedFilmsComponent } from './promised-films/promised-films.component';
import { CurrentFilmsCardComponent } from './current-films-card/current-films-card.component';
import { CurrentFilmsComponent } from './current-films/current-films.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    NavigationComponent,
    FilmsComponent,
    CinemasComponent,
    ContactComponent,
    PricelistComponent,
    FooterComponent,
    PromisedFilmsBallComponent,
    PromisedFilmsComponent,
    CurrentFilmsCardComponent,
    CurrentFilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
