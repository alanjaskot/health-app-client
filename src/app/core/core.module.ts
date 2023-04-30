import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../modules/material.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthUserService } from './services/auth-user.service';

@NgModule({
   declarations: [
      LoginComponent,
      DashboardComponent
  ],
   imports: [ReactiveFormsModule, HttpClientModule, MaterialModule, SharedModule],
   providers: [AuthUserService],
   exports: [LoginComponent]
})
export class CoreModule {}
