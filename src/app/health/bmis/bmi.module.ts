import { NgModule } from '@angular/core';
import { BmiComponent } from './bmi.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BmiRouterModule } from './bmi-router.module';
import { ListBmiComponent } from './components/user/list-bmi/list-bmi.component';
import { BmiApiService } from './service/bmi-api.service';
import { AddUpdateDeleteBmiComponent } from './components/user/add-edit-delete-bmi/add-update-delete-bmi.component';
import { NgxsModule } from '@ngxs/store';
import { BmiState } from './state/bmi.state';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from 'src/app/modules/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

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
