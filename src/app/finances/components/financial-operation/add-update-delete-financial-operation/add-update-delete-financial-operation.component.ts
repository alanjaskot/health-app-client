import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription, map } from 'rxjs';
import { FullPathRoutesEnum } from 'src/app/core/enums/full-path-routes.enum';
import { FinancialOperationForm } from 'src/app/finances/forms/financial-operation.form';
import { IFinancialOperation } from 'src/app/finances/models/financial-operation';
import { IFinancialOperationType } from 'src/app/finances/models/financial-operation-type';
import { LoadFinancialOperationType } from 'src/app/finances/state/financial-operation-type.action';
import { FinancialOperationTypeState } from 'src/app/finances/state/financial-operation-type.state';
import { AddFinancialOperation, DeleteFinancialOperation, LoadFinancialOperationById, UpdateFinancialOperation } from 'src/app/finances/state/financial-operation.action';
import { FinancialOperationState } from 'src/app/finances/state/financial-operation.state';

@Component({
  selector: 'app-add-update-delete-financial-operation',
  templateUrl: './add-update-delete-financial-operation.component.html',
  styleUrls: ['./add-update-delete-financial-operation.component.scss']
})
export class AddUpdateDeleteFinancialOperationComponent implements OnInit, OnDestroy {
  @Select(FinancialOperationTypeState.financialOperationTypeFetched) getAllOperationTypes$: Observable<IFinancialOperationType[]>;

  form: FinancialOperationForm = new FinancialOperationForm();

  private id: string;
  private subscription = new Subscription();

  constructor(
    private acticatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.getOperationId();
    this.subscription.add(
      this.store.dispatch(new LoadFinancialOperationType())
      .subscribe((data) => {
        if (data)
          console.log(JSON.stringify(data));
      }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  saveFinancialOperation(): void {
    if (!this.form.valid) {
      return;
    }
  
    if (this.form.id.value.length === 36) {
      this.updateFinacialOperation();
    } else {
      this.addFinacialOperation();
    }
  }

  deleteFinancialOperation(): void {
    this.store.dispatch(new DeleteFinancialOperation(this.id));
  }

  routeTo(): void {
    this.router.navigate([`/${FullPathRoutesEnum.FINANCES_OPERATION_LIST}`]);
  }

  private addFinacialOperation(): void {
    const toCreate: IFinancialOperation = this.form.value;
    this.store.dispatch(new AddFinancialOperation(toCreate));
  }

  private updateFinacialOperation(): void {
    const toUpdate: IFinancialOperation = this.form.value;
    this.store.dispatch(new UpdateFinancialOperation(toUpdate));
  }

  private getOperationId(): void {
    this.subscription.add(
      this.acticatedRoute.params.subscribe((data: Params) => {
        if (data['id']) {
          this.id = data['id'];
          if (this.id.length === 36) {
            this.getOperationById();
          } else {
            this.form = new FinancialOperationForm();
          }
        } 
      })
    );
  }

  private getOperationById(): void {
    this.subscription.add(
      this.store.dispatch(new LoadFinancialOperationById(this.id)).subscribe(() => {
        this.store
          .select(FinancialOperationState.financialOperationById)
          .pipe(map((filterFn) => filterFn(this.id)))
          .subscribe((operationFromId: IFinancialOperation | undefined) => {
            if (operationFromId) {
              this.form = new FinancialOperationForm(operationFromId);
            } else {
              this.form = new FinancialOperationForm();
            }
          });
      })
    );
  }
}
