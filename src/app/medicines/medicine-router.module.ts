import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineComponent } from './medicine.component';
import { ListMedicineComponent } from './components/user/list-medicine/list-medicine.component';
import { AddEditDeleteMedicineComponent } from './components/user/add-edit-delete-medicine/add-edit-delete-medicine.component';

const routes: Routes = [
  {
    path: '',
    component: MedicineComponent,
    children: [
      { path: 'list', component: ListMedicineComponent },
      { path: 'new', component: AddEditDeleteMedicineComponent },
      { path: 'edit/:id', component: AddEditDeleteMedicineComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicineRoutingModule {}
