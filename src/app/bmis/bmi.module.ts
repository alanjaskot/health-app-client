import { NgModule } from '@angular/core';
import { BmiComponent } from './bmi.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BmiRouterModule } from './bmi-router.module';
import { ListBmiComponent } from './components/user/list-bmi/list-bmi.component';
import { BmiApiService } from './service/bmi-api.service';
import { AddUpdateDeleteBmiComponent } from './components/user/add-edit-delete-bmi/add-update-delete-bmi.component';
import { NgxsModule } from '@ngxs/store';
import { BmiState } from './state/bmi.state';

@NgModule({
  imports: [
    BmiRouterModule,
    CommonModule,
    CoreModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    NgxsModule.forFeature([BmiState]),
  ],
  declarations: [AddUpdateDeleteBmiComponent, BmiComponent, ListBmiComponent],
  providers: [BmiApiService],
})
export class BmiModule {}
