import { Action, Selector, State, StateContext, StateToken } from "@ngxs/store";
import { IFinancialOperationType } from "../models/financial-operation-type";
import { Injectable, NgZone } from "@angular/core";
import { FinancialOperationTypeApiService } from "../services/financial-operation-type-api.service";
import { Router } from "@angular/router";
import { AddFinancialOperationType, DeleteFinancialOperationType, LoadFinancialOperationType, LoadFinancialOperationTypeById, UpdateFinancialOperationType } from "./financial-operation-type.action";
import { tap } from "rxjs";
import { append, insertItem, patch, removeItem, updateItem } from "@ngxs/store/operators";
import { FullPathRoutesEnum } from "src/app/core/enums/full-path-routes.enum";

export interface FinancialOperationTypeStateModel {
  loaded: boolean;
  types: IFinancialOperationType[];
}

const FLINANCIAL_OPERATION_TYPE_STATE_TOKEN = new StateToken<FinancialOperationTypeStateModel>('financialOperationTypeState');

@State<FinancialOperationTypeStateModel>({
  name: FLINANCIAL_OPERATION_TYPE_STATE_TOKEN,
  defaults: {
    loaded: false,
    types: []
  },
})
@Injectable({ providedIn: 'root' })
export class FinancialOperationTypeState {
  constructor(
    private service: FinancialOperationTypeApiService,
    private zone: NgZone,
    private router: Router
  ) {}

  @Action(LoadFinancialOperationType, { cancelUncompleted: true })
  loadFinancialOperationType({ getState, setState }: StateContext<FinancialOperationTypeStateModel>) {
    return this.service.getAllCategories().pipe(
      tap((types: IFinancialOperationType[]) => {
        const state = getState();
        setState({
          ...state,
          types,
        });
      })
    );
  }

  @Action(LoadFinancialOperationTypeById, { cancelUncompleted: true })
  loadFinancialOperationTypeById(
    context: StateContext<FinancialOperationTypeStateModel>,
    { id }: LoadFinancialOperationTypeById
  ) {
    const bloodPressureFromState = context.getState().types;
    return this.service.getCategoryById(id).pipe(
      tap((response: IFinancialOperationType) => {
        if (bloodPressureFromState.find((type: IFinancialOperationType) => type.id === id)) {
          context.setState(
            patch({
              types: updateItem<IFinancialOperationType>(
                (toGet: IFinancialOperationType | undefined) => toGet?.id === response.id,
                response
              ),
            })
          );
        } else {
          context.setState(
            patch({
              types: insertItem<IFinancialOperationType>(response),
            })
          );
        }
      })
    );
  }

  @Action(AddFinancialOperationType, { cancelUncompleted: true })
  addFinancialOperationType(context: StateContext<FinancialOperationTypeStateModel>, { toCreate }: AddFinancialOperationType) {
    return this.service.addCategory(toCreate).pipe(
      tap((response: IFinancialOperationType) => {
        context.setState(
          patch({
            types: append([response]),
          })
        );
        this.zone.run(() => {
          this.router.navigate([`/${FullPathRoutesEnum.FINANCES_OPERATION_TYPE_LIST}`]);
        });
      })
    );
  }

  @Action(UpdateFinancialOperationType, { cancelUncompleted: true })
  updateFinancialOperationType(
    context: StateContext<FinancialOperationTypeStateModel>,
    { toUpdate }: UpdateFinancialOperationType
  ) {
    return this.service.updateCategory(toUpdate).pipe(
      tap((response: IFinancialOperationType) => {
        patch({
          types: updateItem<IFinancialOperationType>(
            (toGet: IFinancialOperationType | undefined) => toGet?.id === response.id,
            response
          ),
        });
        this.zone.run(() => {
          this.router.navigate([`/${FullPathRoutesEnum.FINANCES_OPERATION_TYPE_LIST}`]);
        });
      })
    );
  }

  @Action(DeleteFinancialOperationType, { cancelUncompleted: true })
  deleteFinancialOperationType(context: StateContext<FinancialOperationTypeStateModel>, { id }: DeleteFinancialOperationType) {
    return this.service.deleteCategory(id).pipe(
      tap(() => {
        context.setState(
          patch({
            types: removeItem<IFinancialOperationType>(
              (toDelete: IFinancialOperationType | undefined) => toDelete?.id === id
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
  static financialOperationTypeIsLoaded(state: FinancialOperationTypeStateModel) {
    return state.loaded;
  }

  @Selector()
  static financialOperationTypeFetched(state: FinancialOperationTypeStateModel) {
    return state.types;
  }

  @Selector()
  static financialOperationTypeById(state: FinancialOperationTypeStateModel) {
    return (id: string) => {
      const typeById = state.types.find((type: IFinancialOperationType) => type.id === id);
      return typeById;
    }
  }
}