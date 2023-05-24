import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { FormsModule } from '@angular/forms';
import { ListaGamerComponent } from './components/lista-gamer/lista-gamer.component';
import { HttpClientModule } from '@angular/common/http';
import { ComprarComponent } from './components/comprar/comprar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    LoginComponent,
    RegistrarComponent,
    ListaGamerComponent,
    ComprarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
