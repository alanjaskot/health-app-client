import { NgModule } from '@angular/core';
import { BloodPressureService } from './services/blood-pressure-api.service';
import { BloodPressureComponent } from './blood-pressure.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BloodPressureComponent],
  imports: [CommonModule, CoreModule, MaterialModule, ReactiveFormsModule, SharedModule],
  providers: [BloodPressureService],
})
export class BloodPressureModule {}
