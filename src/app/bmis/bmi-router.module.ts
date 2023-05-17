import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './bmi.component';
import { NgModule } from '@angular/core';
import { ListBmiComponent } from './components/user/list-bmi/list-bmi.component';

const routes: Routes = [
  { path: '', component: BmiComponent, children: [{ path: 'list', component: ListBmiComponent }] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmiRouterModule {}
