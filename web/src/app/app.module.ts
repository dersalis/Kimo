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
import { AuthService } from './services/auth.service';
import { FormsModule} from '@angular/forms';
import { CityCardComponent } from './city-card/city-card.component';
import { CitiesService } from './services/cities.service';
import { HttpClientModule } from '@angular/common/http';
import { FilmsNowService } from './services/films-now.service';
import { FilmsPromService } from './services/films-prom.service';
import { BuyComponent } from './buy/buy.component';
import { BuyService } from './services/buy.service';
import { RouterModule } from '@angular/router';

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
    CurrentFilmsComponent,
    CityCardComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    AuthService,
    CitiesService,
    FilmsNowService,
    FilmsPromService,
    BuyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
