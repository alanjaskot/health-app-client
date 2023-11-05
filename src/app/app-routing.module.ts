import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { RegisterComponent } from './core/components/register/register.component';
import { RoutesEnum } from './core/enums/routes.enum';

const routes: Routes = [
  { path: RoutesEnum.DASHBOARD, component: DashboardComponent },
  { path: RoutesEnum.LOGIN, component: LoginComponent },
  { path: RoutesEnum.REGISTER, component: RegisterComponent },
  { 
    path: RoutesEnum.HEATH, 
    loadChildren: () => import('./health/health.module').then((m) => m.HealthModule)},
  {
    path: RoutesEnum.FINANCES,
    loadChildren: () => import('./finances/finances.module').then((m) => m.FInancesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
