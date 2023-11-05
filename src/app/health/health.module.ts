import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";
import { CoreModule } from "../core/core.module";
import { MaterialModule } from "../modules/material.module";
import { SharedModule } from "../shared/shared.module";
import { AddUpdateDeleteBloodPressureComponent } from "./components/blood-pressure/add-update-delete-blood-pressure/add-update-delete-blood-pressure.component";
import { ListBloodPressureComponent } from "./components/blood-pressure/list-blood-pressure/list-blood-pressure.component";
import { HealthRoutingModule } from "./health-routing.module";
import { BloodPressureApiService } from "./services/blood-pressure-api.service";
import { BloodPressureState } from "./state/blood-pressure.state";
import { BmiApiService } from "./services/bmi-api.service";
import { MedicineApiService } from "./services/medicine-api.service";
import { BmiState } from "./state/bmi.state";
import { MedicineState } from "./state/medicine.state";
import { AddUpdateDeleteBmiComponent } from "./components/bmi/add-edit-delete-bmi/add-update-delete-bmi.component";
import { ListBmiComponent } from "./components/bmi/list-bmi/list-bmi.component";
import { AddEditDeleteMedicineComponent } from "./components/medicines/add-edit-delete-medicine/add-edit-delete-medicine.component";
import { ListMedicineComponent } from "./components/medicines/list-medicine/list-medicine.component";

@NgModule({
  declarations: [
    AddUpdateDeleteBloodPressureComponent,
    ListBloodPressureComponent,

    AddUpdateDeleteBmiComponent,
    ListBmiComponent,

    AddEditDeleteMedicineComponent,
    ListMedicineComponent
  ],
  imports: [
    HealthRoutingModule,
    CommonModule,
    CoreModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    NgxsModule.forFeature([BloodPressureState, BmiState, MedicineState]),
  ],
  providers: [
    BloodPressureApiService,
    BmiApiService,
    MedicineApiService
  ],
})
export class HealthModule {}