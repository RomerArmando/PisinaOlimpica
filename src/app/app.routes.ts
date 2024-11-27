import { Routes } from '@angular/router';
import { LoginComponent } from './Componentes/Login/login/login.component';
import { DashboardComponent } from './Componentes/Dashboard/dashboard/dashboard.component';
import { HorasComponent } from './Componentes/Horas/horas/horas.component';
import { MenuPrincipalComponent } from './Componentes/MenuPrincipal/menu-principal/menu-principal.component';
import { NivelesComponent } from './Componentes/Niveles/niveles/niveles.component';
import { TurnosComponent } from './Componentes/Turnos/turnos/turnos.component';
import { authGuard } from './Guard/auth.guard';

export const routes: Routes = [
    { path: '', component: MenuPrincipalComponent },
    { path: 'auth/login', component: LoginComponent },  // Ruta de login
    {
      path: 'horas',
      component: HorasComponent,
      canActivate: [authGuard],  // Protege la ruta con el guard
    },
    {
      path: 'turnos',
      component: TurnosComponent,
      canActivate: [authGuard],
    },
    {
      path: 'niveles',
      component: NivelesComponent,
      canActivate: [authGuard],
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [authGuard],
    },
    { path: '**', redirectTo: '' },
  ];
