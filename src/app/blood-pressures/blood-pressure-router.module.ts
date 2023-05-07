import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodPressureComponent } from './blood-pressure.component';
import { ListBloodPressureComponent } from './components/user/list-blood-pressure/list-blood-pressure.component';

const routes: Routes = [
  {
    path: '',
    component: BloodPressureComponent,
    children: [{ path: 'list', component: ListBloodPressureComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodPressureRoutingModule {}
