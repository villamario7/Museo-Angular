import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import {provideHttpClient} from "@angular/common/http"; //para arreglar el rollo datajson de catalogo.component


export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideRouter(routes), provideClientHydration(withEventReplay())]
  //Antes el primer argumento era provideZoneChangeDetection({ eventCoalescing: true }), lo he cambiado para arreglar el rollo datajson de catalogo.component
};
