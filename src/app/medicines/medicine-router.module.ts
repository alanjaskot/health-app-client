import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineComponent } from './medicine.component';
import { ListMedicineComponent } from './components/user/list-medicine/list-medicine.component';

const routes: Routes = [
  {
    path: '',
    component: MedicineComponent,
    children: [{ path: 'list', component: ListMedicineComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicineRoutingModule {}
