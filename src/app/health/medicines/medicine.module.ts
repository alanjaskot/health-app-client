import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MedicineComponent } from './medicine.component';
import { MedicineRoutingModule } from './medicine-router.module';
import { ListMedicineComponent } from './components/user/list-medicine/list-medicine.component';
import { AddEditDeleteMedicineComponent } from './components/user/add-edit-delete-medicine/add-edit-delete-medicine.component';
import { MedicineApiService } from './services/medicine-api.service';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from 'src/app/modules/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

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
