import { NgModule } from '@angular/core';
import { BmiComponent } from './bmi.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BmiRouterModule } from './bmi-router.module';

@NgModule({
  imports: [
    BmiRouterModule,
    CommonModule,
    CoreModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [BmiComponent],
})
export class BmiModule {}
