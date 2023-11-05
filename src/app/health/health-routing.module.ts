import { RouterModule, Routes } from "@angular/router";
import { HealthComponent } from "./health.component";
import { HealthRoutes } from "./enum/health-routes.enum";
import { ListBloodPressureComponent } from "./components/blood-pressure/list-blood-pressure/list-blood-pressure.component";
import { AddUpdateDeleteBloodPressureComponent } from "./components/blood-pressure/add-update-delete-blood-pressure/add-update-delete-blood-pressure.component";
import { NgModule } from "@angular/core";
import { ListBmiComponent } from "./components/bmi/list-bmi/list-bmi.component";
import { AddUpdateDeleteBmiComponent } from "./components/bmi/add-edit-delete-bmi/add-update-delete-bmi.component";
import { ListMedicineComponent } from "./components/medicines/list-medicine/list-medicine.component";
import { AddEditDeleteMedicineComponent } from "./components/medicines/add-edit-delete-medicine/add-edit-delete-medicine.component";

const routes: Routes = [
  {
    path: '',
    component: HealthComponent,
    children: [
      { path: HealthRoutes.HEALTH_BLOOD_PRESSURE_LIST, component: ListBloodPressureComponent },
      { path: HealthRoutes.HEALTH_BLOOD_PREESURE_NEW, component: AddUpdateDeleteBloodPressureComponent},
      { path: HealthRoutes.HEALTH_BLOOD_PRESSURE_EDIT, component: AddUpdateDeleteBloodPressureComponent },

      { path: HealthRoutes.HEALTH_BMI_LIST, component: ListBmiComponent},
      { path: HealthRoutes.HEALTH_BMI_NEW, component: AddUpdateDeleteBmiComponent},
      { path: HealthRoutes.HEALTH_BMI_EDIT, component: AddUpdateDeleteBmiComponent},

      { path: HealthRoutes.HEALTH_MEDICINE_LIST, component: ListMedicineComponent },
      { path: HealthRoutes.HEALTH_MEDICINE_NEW, component: AddEditDeleteMedicineComponent },
      { path: HealthRoutes.HEALTH_MEDICINE_EDIT, component: AddEditDeleteMedicineComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthRoutingModule {}
