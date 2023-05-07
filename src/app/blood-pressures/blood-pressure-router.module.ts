import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodPressureComponent } from './blood-pressure.component';
import { ListBloodPressureComponent } from './components/user/list-blood-pressure/list-blood-pressure.component';
import { AddEditDeleteMedicineComponent } from '../medicines/components/user/add-edit-delete-medicine/add-edit-delete-medicine.component';

const routes: Routes = [
  {
    path: '',
    component: BloodPressureComponent,
    children: [
      { path: 'list', component: ListBloodPressureComponent },
      { path: ':id', component: AddEditDeleteMedicineComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodPressureRoutingModule {}
