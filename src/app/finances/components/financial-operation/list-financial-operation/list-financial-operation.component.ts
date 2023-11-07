import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FullPathRoutesEnum } from 'src/app/core/enums/full-path-routes.enum';
import { IFinancialOperation } from 'src/app/finances/models/financial-operation';
import { LoadFinancialOperation } from 'src/app/finances/state/financial-operation.action';
import { FinancialOperationState } from 'src/app/finances/state/financial-operation.state';

@Component({
  selector: 'app-list-financial-operation',
  templateUrl: './list-financial-operation.component.html',
  styleUrls: ['./list-financial-operation.component.scss']
})
export class ListFinancialOperationComponent {
  @Select(FinancialOperationState.financialOperationFetched) data$: Observable<IFinancialOperation[]>;
  columnsToDisplay: string[] = ['created', 'financial category', 'amount', 'description'];
  url: string = '/finances/operation';

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadFinancialOperation(30, 1));
  }

  routeTo(): void {
    this.router.navigate([`/${FullPathRoutesEnum.FINANCES_OPERATION_NEW}`]);
  }
}
