import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../modules/material.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
   declarations: [
      LoginComponent
  ],
   imports: [ReactiveFormsModule, HttpClientModule, MaterialModule],
   providers: [],
   exports: [LoginComponent]
})
export class CoreModule {}
