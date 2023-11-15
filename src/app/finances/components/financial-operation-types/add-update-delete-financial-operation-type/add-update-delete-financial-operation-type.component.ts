import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subscription, map } from 'rxjs';
import { FullPathRoutesEnum } from 'src/app/core/enums/full-path-routes.enum';
import { FinanceRoutes } from 'src/app/finances/enums/finance-routes.enum';
import { FinancialOperationTypeForm } from 'src/app/finances/forms/financial-operation-type.form';
import { IFinancialOperationType } from 'src/app/finances/models/financial-operation-type';
import { AddFinancialOperationType, DeleteFinancialOperationType, LoadFinancialOperationTypeById, UpdateFinancialOperationType } from 'src/app/finances/state/financial-operation-type.action';
import { FinancialOperationTypeState } from 'src/app/finances/state/financial-operation-type.state';

@Component({
  selector: 'app-add-update-delete-financial-operation-type',
  templateUrl: './add-update-delete-financial-operation-type.component.html',
  styleUrls: ['./add-update-delete-financial-operation-type.component.scss']
})
export class AddUpdateDeleteFinancialOperationTypeComponent implements OnInit, OnDestroy {
  form: FinancialOperationTypeForm = new FinancialOperationTypeForm();
  financeTypes = [{ id: 0, name: 'strata'}, { id: 1, name: 'przychód' }];

  private id: string;
  private subscription = new Subscription();

  constructor(
    private acticatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.getOperationTypeId();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  saveFinancialOperationType(): void {
    if (!this.form.valid) {
      return;
    }

    if (this.form.id.value.length === 36) {
      this.updateFinacialOperationType();
    } else {
      this.addFinacialOperationType();
    }
  }

  deleteFinancialOperationType(): void {
    this.store.dispatch(new DeleteFinancialOperationType(this.id));
  }

  routeTo(): void {
    this.router.navigate([`/${FullPathRoutesEnum.FINANCES_OPERATION_TYPE_LIST}`]);
  }

  private addFinacialOperationType(): void {
    const toCreate: IFinancialOperationType = this.form.value;
    this.store.dispatch(new AddFinancialOperationType(toCreate));
  }

  private updateFinacialOperationType(): void {
    const toUpdate: IFinancialOperationType = this.form.value;
    this.store.dispatch(new UpdateFinancialOperationType(toUpdate));
  }

  private getOperationTypeId(): void {
    this.subscription.add(
      this.acticatedRoute.params.subscribe((data: Params) => {
        if (data['id']) {
          this.id = data['id'];
          if (this.id.length === 36) {
            this.getOperationTypeById();
          } else {
            this.form = new FinancialOperationTypeForm();
          }
        } 
      })
    );
  }

  private getOperationTypeById(): void {
    this.subscription.add(
      this.store.dispatch(new LoadFinancialOperationTypeById(this.id)).subscribe(() => {
        this.store
          .select(FinancialOperationTypeState.financialOperationTypeById)
          .pipe(map((filterFn) => filterFn(this.id)))
          .subscribe((typeFromId: IFinancialOperationType | undefined) => {
            if (typeFromId) {
              this.form = new FinancialOperationTypeForm(typeFromId);
            } else {
              this.form = new FinancialOperationTypeForm();
            }
          });
      })
    );
  }
}
