import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FinanceRoutes } from 'src/app/finances/enums/finance-routes.enum';
import { IFinancialOperationType } from 'src/app/finances/models/financial-operation-type';
import { LoadFinancialOperationType } from 'src/app/finances/state/financial-operation-type.action';
import { FinancialOperationTypeState } from 'src/app/finances/state/financial-operation-type.state';

@Component({
  selector: 'app-list-financial-operation-type',
  templateUrl: './list-financial-operation-type.component.html',
  styleUrls: ['./list-financial-operation-type.component.scss']
})
export class ListFinancialOperationTypeComponent implements OnInit {
  @Select(FinancialOperationTypeState.financialOperationTypeFetched) data$: Observable<IFinancialOperationType[]>;
  columnsToDisplay: string[] = ['name', 'type'];
  url: string = '/finances/operation-types';

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadFinancialOperationType());
  }

  routeTo(): void {
    this.router.navigate([`/finances/${FinanceRoutes.OPERATION_TYPE_NEW}`]);
  }
}
