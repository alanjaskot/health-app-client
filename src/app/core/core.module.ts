import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../modules/material.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthUserApiService } from './services/auth-user-api.service';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './state/auth.state';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    MainMenuComponent,
    NavbarComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    NgxsModule.forFeature([AuthState]),
  ],
  providers: [AuthService, AuthUserApiService],
  exports: [DashboardComponent, LoginComponent, MainMenuComponent, NavbarComponent],
})
export class CoreModule {}
