import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodPressureComponent } from './blood-pressure.component';
import { ListBloodPressureComponent } from './components/user/list-blood-pressure/list-blood-pressure.component';
import { AddUpdateDeleteBloodPressureComponent } from './components/user/add-update-delete-blood-pressure/add-update-delete-blood-pressure.component';

const routes: Routes = [
  {
    path: '',
    component: BloodPressureComponent,
    children: [
      { path: 'list', component: ListBloodPressureComponent },
      { path: ':id', component: AddUpdateDeleteBloodPressureComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodPressureRoutingModule {}
