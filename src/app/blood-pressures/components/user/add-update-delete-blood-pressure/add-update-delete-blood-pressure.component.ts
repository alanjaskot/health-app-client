import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription, map } from 'rxjs';
import { BloodPressureForm } from 'src/app/blood-pressures/form/blood-pressure.form';
import { IBloodPressureModel } from 'src/app/blood-pressures/models/blood-pressure.model';
import {
  AddBloodPressure,
  DeleteBloodPressure,
  LoadBloodPressureById,
  UpdateBloodPressure,
} from 'src/app/blood-pressures/state/blood-pressure.actions';
import { BloodPressureState } from 'src/app/blood-pressures/state/blood-pressure.state';
import { LoadMedicines } from 'src/app/medicines/state/medicine.actions';
import { MedicineState } from 'src/app/medicines/state/medicine.state';
import { IIdName } from 'src/app/shared/models/id-name';

@Component({
  selector: 'app-add-update-delete-blood-pressure',
  templateUrl: './add-update-delete-blood-pressure.component.html',
  styleUrls: ['./add-update-delete-blood-pressure.component.css'],
})
export class AddUpdateDeleteBloodPressureComponent implements OnInit, OnDestroy {
  @Select(MedicineState.medicinesFetched) getAllMedicines$: Observable<IIdName>;

  form: BloodPressureForm;

  private id: string;
  private subscription = new Subscription();

  constructor(
    private acticatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.getBloodPressureId();
    this.dispatchMedicines();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  saveBloodPressure(): void {
    if (this.form.id.value.length === 36) {
      this.updateBloodPressure();
    } else {
      this.addBloodPressure();
    }
  }

  deleteBloodPressure(): void {
    this.store.dispatch(new DeleteBloodPressure(this.id));
  }

  routeTo(): void {
    this.router.navigate(['/blood-pressure/list']);
  }

  private addBloodPressure(): void {
    const toCrate: IBloodPressureModel = this.form.value;
    this.store.dispatch(new AddBloodPressure(toCrate));
  }

  private updateBloodPressure(): void {
    this.store.dispatch(new UpdateBloodPressure(this.form.value));
  }

  private getBloodPressureId(): void {
    this.subscription.add(
      this.acticatedRoute.params.subscribe((data: Params) => {
        this.id = data['id'];
        if (this.id.length === 36) {
          this.getBloodPressureById();
        } else {
          this.form = new BloodPressureForm();
        }
      })
    );
  }

  private getBloodPressureById(): void {
    this.subscription.add(
      this.store.dispatch(new LoadBloodPressureById(this.id)).subscribe(() => {
        this.store
          .select(BloodPressureState.bloodPressureById)
          .pipe(map((filterFn) => filterFn(this.id)))
          .subscribe((bpFromId: IBloodPressureModel | undefined) => {
            if (bpFromId) {
              this.form = new BloodPressureForm(bpFromId);
            } else {
              this.form = new BloodPressureForm();
            }
          });
      })
    );
  }

  private dispatchMedicines(): void {
    this.store.dispatch(new LoadMedicines());
  }
}
