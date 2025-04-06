import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';  // AppComponent standalone
import { CatalogoComponent } from './pages/catalogo/catalogo.component';  // Importa el componente standalone

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CatalogoComponent // Importa el componente standalone directamente
  ],
  providers: [],
  // Ya no es necesario declarar componentes en "declarations"
})
export class AppModule { }
