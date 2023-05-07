import { NgModule } from '@angular/core';
import { BloodPressureService } from './services/blood-pressure-api.service';
import { BloodPressureComponent } from './blood-pressure.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BloodPressureRoutingModule } from './blood-pressure-router.module';
import { ListBloodPressureComponent } from './components/user/list-blood-pressure/list-blood-pressure.component';
import { AddUpdateDeleteBloodPressureComponent } from './components/user/add-update-delete-blood-pressure/add-update-delete-blood-pressure.component';

@NgModule({
  declarations: [
    AddUpdateDeleteBloodPressureComponent,
    BloodPressureComponent,
    ListBloodPressureComponent,
  ],
  imports: [
    BloodPressureRoutingModule,
    CommonModule,
    CoreModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [BloodPressureService],
})
export class BloodPressureModule {}
