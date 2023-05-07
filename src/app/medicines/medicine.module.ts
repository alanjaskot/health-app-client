import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MedicineComponent } from './medicine.component';
import { MedicineRoutingModule } from './medicine-router.module';
import { ListMedicineComponent } from './components/user/list-medicine/list-medicine.component';
import { AddEditDeleteMedicineComponent } from './components/user/add-edit-delete-medicine/add-edit-delete-medicine.component';
import { MedicineApiService } from './services/medicine-api.service';

@NgModule({
  declarations: [AddEditDeleteMedicineComponent, ListMedicineComponent, MedicineComponent],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    MedicineRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [MedicineApiService],
})
export class MedicineModule {}
