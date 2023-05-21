import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './bmi.component';
import { NgModule } from '@angular/core';
import { ListBmiComponent } from './components/user/list-bmi/list-bmi.component';
import { AddUpdateDeleteBmiComponent } from './components/user/add-edit-delete-bmi/add-update-delete-bmi.component';

const routes: Routes = [
  {
    path: '',
    component: BmiComponent,
    children: [
      { path: 'list', component: ListBmiComponent },
      { path: ':id', component: AddUpdateDeleteBmiComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmiRouterModule {}
