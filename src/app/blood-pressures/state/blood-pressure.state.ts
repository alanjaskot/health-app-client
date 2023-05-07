import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { IBloodPressure } from '../models/blood-pressure.model';
import { Injectable, NgZone } from '@angular/core';
import { BloodPressureService } from '../services/blood-pressure-api.service';
import { Router } from '@angular/router';
import {
  AddBloodPressure,
  DeleteBloodPressure,
  LoadBloodPressureById,
  LoadBloodPressures,
  LoadDeletedBloodPressures,
} from './blood-pressure.actions';
import { tap } from 'rxjs/operators';
import { append, insertItem, patch, removeItem, updateItem } from '@ngxs/store/operators';
import { UpdateBloodPressure } from './blood-pressure.actions';

export interface BloodPressureStateModel {
  loaded: boolean;
  bps: IBloodPressure[];
  deletedBps: IBloodPressure[]; // temp
}

const BLOOD_PRESSURE_STATE_TOKEN = new StateToken<BloodPressureStateModel>('bloodPressureSate');
const navigate = 'blood-pressure/list';

@State<BloodPressureStateModel>({
  name: BLOOD_PRESSURE_STATE_TOKEN,
  defaults: {
    loaded: false,
    bps: [],
    deletedBps: [],
  },
})
@Injectable({ providedIn: 'root' })
export class BloodPressureState {
  constructor(
    private service: BloodPressureService,
    private zone: NgZone,
    private router: Router
  ) {}

  @Action(LoadBloodPressures, { cancelUncompleted: true })
  loadBloodPressures({ getState, setState }: StateContext<BloodPressureStateModel>) {
    return this.service.getAllBloodPressures().pipe(
      tap((bps: IBloodPressure[]) => {
        const state = getState();
        setState({
          ...state,
          bps,
        });
      })
    );
  }

  @Action(LoadDeletedBloodPressures, { cancelUncompleted: true })
  loadDeletedBloodPressures(
    { getState, setState }: StateContext<BloodPressureStateModel>,
    { userId, isDeleted }: LoadDeletedBloodPressures
  ) {
    return this.service.getDeletedBloodPressures(userId, isDeleted).pipe(
      tap((deletedBps: IBloodPressure[]) => {
        const state = getState();
        setState({
          ...state,
          deletedBps,
        });
      })
    );
  }

  @Action(LoadBloodPressureById, { cancelUncompleted: true })
  loadBloodPressureById(
    context: StateContext<BloodPressureStateModel>,
    { id }: LoadBloodPressureById
  ) {
    const bloodPressureFromState = context.getState().bps;
    return this.service.getBloodPressureById(id).pipe(
      tap((response: IBloodPressure) => {
        if (bloodPressureFromState.find((m: IBloodPressure) => m.id === id)) {
          context.setState(
            patch({
              bps: updateItem<IBloodPressure>(
                (toGet: IBloodPressure | undefined) => toGet?.id === response.id,
                response
              ),
            })
          );
        } else {
          context.setState(
            patch({
              bps: insertItem<IBloodPressure>(response),
            })
          );
        }
      })
    );
  }

  @Action(AddBloodPressure, { cancelUncompleted: true })
  addBloodPressure(context: StateContext<BloodPressureStateModel>, { toCreate }: AddBloodPressure) {
    return this.service.addBloodPressure(toCreate).pipe(
      tap((response: IBloodPressure) => {
        context.setState(
          patch({
            bps: append([response]),
          })
        );
        this.zone.run(() => {
          this.router.navigate([navigate]);
        });
      })
    );
  }

  @Action(UpdateBloodPressure, { cancelUncompleted: true })
  updateBloodPressure(
    context: StateContext<BloodPressureStateModel>,
    { toUpdate }: UpdateBloodPressure
  ) {
    return this.service.updateBloodPressure(toUpdate).pipe(
      tap((response: IBloodPressure) => {
        patch({
          bps: updateItem<IBloodPressure>(
            (toGet: IBloodPressure | undefined) => toGet?.id === response.id,
            response
          ),
        });
        this.zone.run(() => {
          this.router.navigate([navigate]);
        });
      })
    );
  }

  @Action(DeleteBloodPressure, { cancelUncompleted: true })
  deleteBloodPressure(context: StateContext<BloodPressureStateModel>, { id }: DeleteBloodPressure) {
    return this.service.deleteBloodPressure(id).pipe(
      tap(() => {
        context.setState(
          patch({
            bps: removeItem<IBloodPressure>(
              (toDelete: IBloodPressure | undefined) => toDelete?.id === id
            ),
          })
        );
        this.zone.run(() => {
          this.router.navigate([navigate]);
        });
      })
    );
  }

  @Selector()
  static bloodPressureIsLoaded(state: BloodPressureStateModel) {
    return state.loaded;
  }

  @Selector()
  static bloodPressuresFetched(state: BloodPressureStateModel) {
    return state.bps;
  }

  @Selector()
  static deletedBloodPressuresFetched(state: BloodPressureStateModel) {
    return state.deletedBps;
  }

  @Selector()
  static bloodPressureById(state: BloodPressureStateModel) {
    return (id: string) => {
      return state.bps.find((bp: IBloodPressure) => bp.id === id);
    };
  }
}
