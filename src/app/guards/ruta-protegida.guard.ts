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
  
  return from(servicioAuth.obtenerUid()).pipe(
    switchMap(uid => {
      if(uid){
        return servicioAuth.obtenerRol(uid).pipe(
          map(rol=>{
            if(rol === rolEsperado){
              console.log("Usuario verificado como administrador")

              return true;
            }else{
              //Denegamos acceso al usuario
              return false;
            }
          })
        )
      }else{
        console.log("Usuario no validado. Permisos insuficientes");

        //Redireccionamos acceso a inicio para usuarios no validos
        //Usuario no valido:
        return of(servicioRutas.createUrlTree(['/inicio']));
      }
    })
  )
};
