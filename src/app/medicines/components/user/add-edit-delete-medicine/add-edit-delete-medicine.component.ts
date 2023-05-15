import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subscription, map } from 'rxjs';
import { MedicineForm } from 'src/app/medicines/form/medicine.form';
import { IMedicineModel } from 'src/app/medicines/models/medicine.model';
import {
  AddMedicine,
  DeleteMedicine,
  LoadMedicineById,
  UpdateMedicine,
} from 'src/app/medicines/state/medicine.actions';
import { MedicineState } from 'src/app/medicines/state/medicine.state';

@Component({
  selector: 'app-add-edit-delete-medicine',
  templateUrl: './add-edit-delete-medicine.component.html',
  styleUrls: ['./add-edit-delete-medicine.component.css'],
})
export class AddEditDeleteMedicineComponent implements OnInit {
  id: string;
  isEditing: boolean;
  form: MedicineForm = new MedicineForm();

  private subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.activatedRoute.params.subscribe((data: Params) => {
        const id = data['id'];
        if (id.length === 36) {
          this.isEditing = true;
          this.getMedicineById(id);
        } else {
          this.startNewForm();
        }
      })
    );
  }

  saveMedicine(): void {
    if (!this.form.valid) {
      return;
    }

    if (this.form.id.value.length === 36) {
      this.store.dispatch(new UpdateMedicine(this.form.value));
    } else {
      this.store.dispatch(new AddMedicine(this.form.value));
    }
  }

  deleteMedicine(): void {
    this.store.dispatch(new DeleteMedicine(this.form.id.value));
  }

  routeTo(): void {
    this.router.navigate(['/medicine/list']);
  }

  private getMedicineById(id: string): void {
    this.subscription.add(
      this.store.dispatch(new LoadMedicineById(id)).subscribe(() => {
        this.store
          .select(MedicineState.medicineById)
          .pipe(map((filterFn) => filterFn(id)))
          .subscribe((medicineFromId: IMedicineModel | undefined) => {
            if (medicineFromId) {
              this.form = new MedicineForm(medicineFromId);
            }
          });
      })
    );
  }

  private startNewForm(): void {
    this.form = new MedicineForm();
  }
}
