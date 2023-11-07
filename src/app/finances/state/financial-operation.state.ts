import { Action, Selector, State, StateContext, StateToken } from "@ngxs/store";
import { IFinancialOperation } from "../models/financial-operation";
import { Injectable, NgZone } from "@angular/core";
import { FinancialOperationApiService } from "../services/financial-operation-api.service";
import { Router } from "@angular/router";
import { AddFinancialOperation, DeleteFinancialOperation, LoadFinancialOperation, LoadFinancialOperationByDate, LoadFinancialOperationById, UpdateFinancialOperation } from "./financial-operation.action";
import { tap } from "rxjs";
import { append, insertItem, patch, removeItem, updateItem } from "@ngxs/store/operators";
import { FullPathRoutesEnum } from "src/app/core/enums/full-path-routes.enum";

export interface FinancialOperationStateModel {
    loaded: boolean;
    operations: IFinancialOperation[];
    operationsByDate: IFinancialOperation[];
}

const FLINANCIAL_OPERATION_STATE_TOKEN = new StateToken<FinancialOperationStateModel>('financialOperationState');

@State<FinancialOperationStateModel>({
  name: FLINANCIAL_OPERATION_STATE_TOKEN,
  defaults: {
    loaded: false,
    operations: [],
    operationsByDate: []
  },
})
@Injectable({ providedIn: 'root' })
export class FinancialOperationState {
    constructor(
        private service: FinancialOperationApiService,
        private zone: NgZone,
        private router: Router
    ) {}

    @Action(LoadFinancialOperation, { cancelUncompleted: true })
    loadFinancialOperation({ getState, setState }: StateContext<FinancialOperationStateModel>,
    { pageSize, pageNumber }) {
      return this.service.getOperationsByPages(pageSize, pageNumber).pipe(
        tap((operations: IFinancialOperation[]) => {
          const state = getState();
          setState({
            ...state,
            operations,
          });
        })
      );
    }

    @Action(LoadFinancialOperationByDate, { cancelUncompleted: true })
    loadFinancialOperationByDate({ getState, setState }: StateContext<FinancialOperationStateModel>,
    { from, to, pageSize, pageNumber }) {
      return this.service.getOperationsByDates(from, to, pageSize, pageNumber).pipe(
        tap((operationsByDate: IFinancialOperation[]) => {
          const state = getState();
          setState({
            ...state,
            operationsByDate,
          });
        })
      );
    }

  @Action(LoadFinancialOperationById, { cancelUncompleted: true })
  loadFinancialOperationById(
    context: StateContext<FinancialOperationStateModel>,
    { id }: LoadFinancialOperationById
  ) {
    const bloodPressureFromState = context.getState().operations;
    return this.service.getOperationById(id).pipe(
      tap((response: IFinancialOperation) => {
        if (bloodPressureFromState.find((operation: IFinancialOperation) => operation.id === id)) {
          context.setState(
            patch({
              operations: updateItem<IFinancialOperation>(
                (toGet: IFinancialOperation | undefined) => toGet?.id === response.id,
                response
              ),
            })
          );
        } else {
          context.setState(
            patch({
              operations: insertItem<IFinancialOperation>(response),
            })
          );
        }
      })
    );
  }

  @Action(AddFinancialOperation, { cancelUncompleted: true })
  addFinancialOperationType(context: StateContext<FinancialOperationStateModel>, { toCreate }: AddFinancialOperation) {
    return this.service.addOperation(toCreate).pipe(
      tap((response: IFinancialOperation) => {
        context.setState(
          patch({
            operations: append([response]),
          })
        );
        this.zone.run(() => {
          this.router.navigate([`/${FullPathRoutesEnum.FINANCES_OPERATION_LIST}`]);
        });
      })
    );
  }

  @Action(UpdateFinancialOperation, { cancelUncompleted: true })
  updateFinancialOperationType(
    context: StateContext<FinancialOperationStateModel>,
    { toUpdate }: UpdateFinancialOperation
  ) {
    return this.service.updateOperation(toUpdate).pipe(
      tap((response: IFinancialOperation) => {
        patch({
          types: updateItem<IFinancialOperation>(
            (toGet: IFinancialOperation | undefined) => toGet?.id === response.id,
            response
          ),
        });
        this.zone.run(() => {
          this.router.navigate([`/${FullPathRoutesEnum.FINANCES_OPERATION_LIST}`]);
        });
      })
    );
  }

  @Action(DeleteFinancialOperation, { cancelUncompleted: true })
  deleteFinancialOperationType(context: StateContext<FinancialOperationStateModel>, { id }: DeleteFinancialOperation) {
    return this.service.deleteOperation(id).pipe(
      tap(() => {
        context.setState(
          patch({
            operations: removeItem<IFinancialOperation>(
              (toDelete: IFinancialOperation | undefined) => toDelete?.id === id
            ),
          })
        );
        this.zone.run(() => {
          this.router.navigate([`/${FullPathRoutesEnum.FINANCES_OPERATION_TYPE_LIST}`]);
        });
      })
    );
  }

  @Selector()
  static financialOperationIsLoaded(state: FinancialOperationStateModel) {
    return state.loaded;
  }

  @Selector()
  static financialOperationFetched(state: FinancialOperationStateModel) {
    return state.operations;
  }

  @Selector()
  static financialOperationByDateFetched(state: FinancialOperationStateModel) {
    return state.operationsByDate;
  }

  @Selector()
  static financialOperationById(state: FinancialOperationStateModel) {
    return (id: string) => {
      const typeById = state.operations.find((type: IFinancialOperation) => type.id === id);
      return typeById;
    }
  }
}