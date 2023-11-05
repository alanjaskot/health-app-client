import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { IBmiModel } from '../models/bmi.model';
import { Injectable, NgZone } from '@angular/core';
import { BmiApiService } from '../services/bmi-api.service';
import { Router } from '@angular/router';
import {
  AddBmi,
  DeleteBmi,
  LoadBmiById,
  LoadBmis,
  LoadDeletedBmis,
  UpdateBmi,
} from './bmi.actions';
import { tap } from 'rxjs/operators';
import { append, insertItem, patch, removeItem, updateItem } from '@ngxs/store/operators';

export interface BmiStateModel {
  loaded: boolean;
  bmis: IBmiModel[];
  deletedBmis: IBmiModel[]; // temp
}

const BMI_STATE_TOKEN = new StateToken<BmiStateModel>('bmiState');
const navigate = 'bmi/list';

@State<BmiStateModel>({
  name: BMI_STATE_TOKEN,
  defaults: { loaded: false, bmis: [], deletedBmis: [] },
})
@Injectable({
  providedIn: 'root',
})
export class BmiState {
  constructor(private service: BmiApiService, private zone: NgZone, private router: Router) {}

  @Action(LoadBmis, { cancelUncompleted: true })
  loadBmis({ getState, setState }: StateContext<BmiStateModel>) {
    return this.service.getBmis().pipe(
      tap((bmis: IBmiModel[]) => {
        const state = getState();
        setState({
          ...state,
          bmis,
        });
      })
    );
  }

  @Action(LoadDeletedBmis, { cancelUncompleted: true })
  loadDeletedBmi({ getState, setState }: StateContext<BmiStateModel>, { userId, isDeleted }) {
    return this.service.getDeletedBmis(userId, isDeleted).pipe(
      tap((deletedBmis: IBmiModel[]) => {
        const state = getState();
        setState({
          ...state,
          deletedBmis,
        });
      })
    );
  }

  @Action(LoadBmiById, { cancelUncompleted: true })
  loadBmiById(context: StateContext<BmiStateModel>, { id }: LoadBmiById) {
    const bmiFromState = context.getState().bmis;
    return this.service.getBmiById(id).pipe(
      tap((response: IBmiModel) => {
        if (bmiFromState.find((bmi: IBmiModel) => bmi.id === id)) {
          context.setState(
            patch({
              bmis: updateItem<IBmiModel>(
                (toGet: IBmiModel | undefined) => toGet?.id === response.id,
                response
              ),
            })
          );
        } else {
          context.setState(
            patch({
              bmis: insertItem<IBmiModel>(response),
            })
          );
        }
      })
    );
  }

  @Action(AddBmi, { cancelUncompleted: true })
  addBmi(context: StateContext<BmiStateModel>, { toCreate }: AddBmi) {
    return this.service.addBmi(toCreate).pipe(
      tap((response: IBmiModel) => {
        context.setState(
          patch({
            bmis: append([response]),
          })
        );
        this.zone.run(() => {
          this.router.navigate([navigate]);
        });
      })
    );
  }

  @Action(UpdateBmi, { cancelUncompleted: true })
  updateBmi(context: StateContext<BmiStateModel>, { toUpdate }: UpdateBmi) {
    return this.service.updateBmi(toUpdate).pipe(
      tap((response: IBmiModel) => {
        patch({
          bmis: updateItem<IBmiModel>(
            (toGet: IBmiModel | undefined) => toGet?.id === response.id,
            response
          ),
        });
        this.zone.run(() => {
          this.router.navigate([navigate]);
        });
      })
    );
  }

  @Action(DeleteBmi, { cancelUncompleted: true })
  DeleteBmi(context: StateContext<BmiStateModel>, { id }: DeleteBmi) {
    return this.service.deleteBmi(id).pipe(
      tap(() => {
        context.setState(
          patch({
            bmis: removeItem<IBmiModel>((toDelete: IBmiModel | undefined) => toDelete?.id === id),
          })
        );
        this.zone.run(() => {
          this.router.navigate([navigate]);
        });
      })
    );
  }

  @Selector()
  static bmiIsLoaded(state: BmiStateModel) {
    return state.loaded;
  }

  @Selector()
  static bmiFetched(state: BmiStateModel) {
    return state.bmis;
  }

  @Selector()
  static bmiById(state: BmiStateModel) {
    return (id: string) => {
      const bmiById = state.bmis.find((bmi: IBmiModel) => bmi.id === id);
      return bmiById;
    };
  }
}
