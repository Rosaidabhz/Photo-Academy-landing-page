import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Section1Component } from './section1/section1.component';
import { SecHeroComponent } from './sec-hero/sec-hero.component';
import { EscuelaComponent } from './escuela/escuela.component';
import { SocialComponent } from './social/social.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { LoginComponent } from './login/login.component';
import { FoonterComponent } from './foonter/foonter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Section1Component,
    SecHeroComponent,
    EscuelaComponent,
    SocialComponent,
    CarruselComponent,
    LoginComponent,
    FoonterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
