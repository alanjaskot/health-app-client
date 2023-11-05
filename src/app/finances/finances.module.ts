import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "../core/core.module";
import { MaterialModule } from "../modules/material.module";
import { SharedModule } from "../shared/shared.module";
import { FinancesRoutingModule } from "./finances-router.module";
import { FinancialOperationApiService } from "./services/financial-operation-api.service";
import { FinancialOperationTypeApiService } from "./services/financial-operation-type-api.service";
import { ListFinancialOperationTypeComponent } from "./components/financial-operation-types/list-financial-operation-type/list-financial-operation-type.component";
import { AddUpdateDeleteFinancialOperationTypeComponent } from "./components/financial-operation-types/add-update-delete-financial-operation-type/add-update-delete-financial-operation-type.component";
import { FinancialOperationTypeState } from "./state/financial-operation-type.state";
import { NgxsModule } from "@ngxs/store";

@NgModule({
  declarations: [
    ListFinancialOperationTypeComponent,
    AddUpdateDeleteFinancialOperationTypeComponent
  ],
  imports: [
    FinancesRoutingModule,
    CommonModule,
    CoreModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    NgxsModule.forFeature([FinancialOperationTypeState]),
  ],
  providers: [FinancialOperationApiService, FinancialOperationTypeApiService],
})
export class FInancesModule {}
