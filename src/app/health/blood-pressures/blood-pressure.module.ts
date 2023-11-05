import { NgModule } from '@angular/core';
import { BloodPressureApiService } from './services/blood-pressure-api.service';
import { BloodPressureComponent } from './blood-pressure.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BloodPressureRoutingModule } from './blood-pressure-router.module';
import { ListBloodPressureComponent } from './components/user/list-blood-pressure/list-blood-pressure.component';
import { AddUpdateDeleteBloodPressureComponent } from './components/user/add-update-delete-blood-pressure/add-update-delete-blood-pressure.component';
import { NgxsModule } from '@ngxs/store';
import { BloodPressureState } from './state/blood-pressure.state';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from 'src/app/modules/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

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
    NgxsModule.forFeature([BloodPressureState]),
  ],
  providers: [BloodPressureApiService],
})
export class BloodPressureModule {}
