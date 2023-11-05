import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "../core/core.module";
import { MaterialModule } from "../modules/material.module";
import { SharedModule } from "../shared/shared.module";
import { FinancesRoutingModule } from "./finances-router.module";
import { FinancialOperationApiService } from "./services/financial-operation-api.service";
import { FinancialOperationTypeApiService } from "./services/financial-operation-type-api.service";

@NgModule({
  declarations: [
  ],
  imports: [
    FinancesRoutingModule,
    CommonModule,
    CoreModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [FinancialOperationApiService, FinancialOperationTypeApiService],
})
export class FInancesModule {}
