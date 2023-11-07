import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FinancesComponent } from "./finances.component";
import { FinanceRoutes } from "./enums/finance-routes.enum";
import { ListFinancialOperationTypeComponent } from "./components/financial-operation-types/list-financial-operation-type/list-financial-operation-type.component";
import { AddUpdateDeleteFinancialOperationTypeComponent } from "./components/financial-operation-types/add-update-delete-financial-operation-type/add-update-delete-financial-operation-type.component";
import { ListFinancialOperationComponent } from "./components/financial-operation/list-financial-operation/list-financial-operation.component";
import { AddUpdateDeleteFinancialOperationComponent } from "./components/financial-operation/add-update-delete-financial-operation/add-update-delete-financial-operation.component";

const routes: Routes = [
  {
    path: '',
    component: FinancesComponent,
    children: [
      { path: FinanceRoutes.OPERATION_TYPE_LIST, component: ListFinancialOperationTypeComponent },
      { path: FinanceRoutes.OPERATION_TYPE_NEW, component: AddUpdateDeleteFinancialOperationTypeComponent },
      { path: FinanceRoutes.OPERATION_TYPE_EDIT, component: AddUpdateDeleteFinancialOperationTypeComponent },

      { path: FinanceRoutes.OPERATION_LIST, component: ListFinancialOperationComponent },
      { path: FinanceRoutes.OPERATION_NEW, component: AddUpdateDeleteFinancialOperationComponent },
      { path: FinanceRoutes.OPERATION_EDIT, component: AddUpdateDeleteFinancialOperationComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancesRoutingModule {}
