import { Injectable } from '@angular/core';
/*validar que no se pueda entrar a la ruta indepediente que se conozca la url */
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(siguientePagina: ActivatedRouteSnapshot, estado: RouterStateSnapshot) {
    if (this.auth.isAuthenticated) {
      console.log('Puede Entrar a la ruta');
      return true;
    }
    console.log('Bloqueda la ruta por AuthGuard');
    return false;
  }
}
