
// ===============================================================
// Configuracion global de angular, aqui activamos
// el HttpClient para consumir el API

import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    // Activamos el sistema de rutas
    provideRouter(routes),
    // Activamos HttpClient para consumir el backend
    provideHttpClient()
  ]
};

