import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';


/*se importa el servicio auth-guard que implementa canActivate que permite verificar si
el usuario esta logueado de lo contrario no lo deja ingresar.
esta implementacion se usa por defecto el la propiedad canActivate de la ruta. 
*/
import { AuthGuardService } from './services/auth-guard.service';

const RUTAS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'precios', component: PreciosComponent },
    {
        path: 'protegida',
        component: ProtegidaComponent,
        canActivate: [AuthGuardService]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const RUTAS_APLICACION = RouterModule.forRoot(RUTAS);

