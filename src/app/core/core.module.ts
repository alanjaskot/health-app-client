import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../modules/material.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthUserService } from './services/auth-user.service';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [DashboardComponent, LoginComponent, NavbarComponent, RegisterComponent],
  imports: [CommonModule, HttpClientModule, MaterialModule, ReactiveFormsModule, SharedModule],
  providers: [AuthService, AuthUserService],
  exports: [DashboardComponent, LoginComponent, NavbarComponent],
})
export class CoreModule {}
