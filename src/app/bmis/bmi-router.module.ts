import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './bmi.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: BmiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmiRouterModule {}
