import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { RegisterComponent } from './core/components/register/register.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'bmi', loadChildren: () => import('./health/bmis/bmi.module').then((m) => m.BmiModule) },
  {
    path: 'blood-pressure',
    loadChildren: () =>
      import('./health/blood-pressures/blood-pressure.module').then((m) => m.BloodPressureModule),
  },
  {
    path: 'medicine',
    loadChildren: () => import('./health/medicines/medicine.module').then((m) => m.MedicineModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
