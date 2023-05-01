import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../modules/material.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthUserService } from './services/auth-user.service';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [DashboardComponent, LoginComponent, NavbarComponent, RegisterComponent],
  imports: [HttpClientModule, MaterialModule, ReactiveFormsModule, SharedModule],
  providers: [AuthUserService],
  exports: [DashboardComponent, LoginComponent, NavbarComponent],
})
export class CoreModule {}
