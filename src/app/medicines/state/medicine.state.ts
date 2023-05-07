import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { IMedicineModel } from '../models/medicine.model';
import { Injectable, NgZone } from '@angular/core';
import { MedicineService } from '../services/medicine.service';
import { Router } from '@angular/router';
import {
  AddMedicine,
  DeleteMedicine,
  LoadDeletedMedicines,
  LoadMedicineById,
  LoadMedicines,
  UpdateMedicine,
} from './medicine.actions';
import { tap } from 'rxjs/operators';
import { append, insertItem, patch, removeItem, updateItem } from '@ngxs/store/operators';

export interface MedicineStateModel {
  loaded: boolean;
  medicines: IMedicineModel[];
}

const MEDICINE_STATE_TOKEN = new StateToken<MedicineStateModel>('medicineSate');

@State<MedicineStateModel>({
  name: MEDICINE_STATE_TOKEN,
  defaults: {
    loaded: false,
    medicines: [],
  },
})
@Injectable({ providedIn: 'root' })
export class MedicineState {
  constructor(private service: MedicineService, private zone: NgZone, private router: Router) {}

  @Action(LoadMedicines, { cancelUncompleted: true })
  loadMedicines({ getState, setState }: StateContext<MedicineStateModel>) {
    return this.service.getAllMedicines().pipe(
      tap((medicines: IMedicineModel[]) => {
        const state = getState();
        setState({
          ...state,
          medicines,
        });
      })
    );
  }

  @Action(LoadDeletedMedicines, { cancelUncompleted: true })
  loadDeletedMedicines(
    { getState, setState }: StateContext<MedicineStateModel>,
    { userId, isDeleted }: LoadDeletedMedicines
  ) {
    return this.service.getDeletedMedicines(userId, isDeleted).pipe(
      tap((medicines: IMedicineModel[]) => {
        const state = getState();
        setState({
          ...state,
          medicines,
        });
      })
    );
  }

  @Action(LoadMedicineById, { cancelUncompleted: true })
  loadMedicineById(context: StateContext<MedicineStateModel>, { id }: LoadMedicineById) {
    const medicineFromState = context.getState().medicines;
    return this.service.getMedicineById(id).pipe(
      tap((response: IMedicineModel) => {
        if (medicineFromState.find((m: IMedicineModel) => m.id === id)) {
          context.setState(
            patch({
              medicines: updateItem<IMedicineModel>(
                (toGet: IMedicineModel | undefined) => toGet?.id === response.id,
                response
              ),
            })
          );
        } else {
          context.setState(
            patch({
              medicines: insertItem<IMedicineModel>(response),
            })
          );
        }
      })
    );
  }

  @Action(AddMedicine, { cancelUncompleted: true })
  addMedicine(context: StateContext<MedicineStateModel>, { medicine }: AddMedicine) {
    return this.service.addMedicine(medicine).pipe(
      tap((response: IMedicineModel) => {
        context.setState(
          patch({
            medicines: append([response]),
          })
        );
        this.zone.run(() => {
          this.router.navigate(['medicine/list']);
        });
      })
    );
  }

  @Action(UpdateMedicine, { cancelUncompleted: true })
  updateMedicine(context: StateContext<MedicineStateModel>, { medicine }: UpdateMedicine) {
    return this.service.updateMedicine(medicine).pipe(
      tap((response: IMedicineModel) => {
        context.setState(
          patch({
            medicines: updateItem<IMedicineModel>(
              (toGet: IMedicineModel | undefined) => toGet?.id === response.id,
              response
            ),
          })
        );
        this.zone.run(() => {
          this.router.navigate(['medicine/list']);
        });
      })
    );
  }

  @Action(DeleteMedicine, { cancelUncompleted: true })
  deleteMedicine(context: StateContext<MedicineStateModel>, { id }: DeleteMedicine) {
    return this.service.deleteMedicine(id).pipe(
      tap(() => {
        context.setState(
          patch({
            medicines: removeItem<IMedicineModel>(
              (toDelete: IMedicineModel | undefined) => toDelete?.id === id
            ),
          })
        );
        this.zone.run(() => {
          this.router.navigate(['medicine/list']);
        });
      })
    );
  }

  @Selector()
  static medicinesIsLoaded(state: MedicineStateModel) {
    return state.loaded;
  }

  @Selector()
  static medicinesFetched(state: MedicineStateModel) {
    return state.medicines;
  }

  @Selector()
  static medicineById(state: MedicineStateModel) {
    return (id: string) => {
      return state.medicines.find((medicine: IMedicineModel) => medicine.id === id);
    };
  }
}
