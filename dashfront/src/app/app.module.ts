import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoComponent } from './components/meteo/meteo.component';
import { covidComponent } from './components/covid/covid.component';
import { InfogaucheComponent } from './components/infogauche/infogauche.component';
import { FilmComponent } from './components/film/film.component';
import { EventsComponent } from './components/events/events.component';


@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
   
    
    covidComponent,
    InfogaucheComponent,
    FilmComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
