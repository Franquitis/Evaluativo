import { CanActivateFn } from '@angular/router';

import { inject, Inject } from '@angular/core';

import { AuthService } from '../modules/autentificacion/services/auth.service';

import { Router } from '@angular/router';

//Operadores de tipo "obsevables
import {map, switchMap, of, from} from 'rxjs';

export const rutaProtegidaGuard: CanActivateFn = (route, state) => {
  const servicioAuth = inject (AuthService);

  const servicioRutas = inject (Router)

  const rolEsperado = "admin";
  
  return true;
};
