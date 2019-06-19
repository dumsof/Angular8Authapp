import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

const RUTAS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'precios', component: PreciosComponent },
    { path: 'protegida', component: ProtegidaComponent },   
    { path: '**', pathMatch: 'full', redirectTo: 'home'},


];

export const RUTAS_APLICACION = RouterModule.forRoot(RUTAS);

