import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { BmiForm } from '../../../forms/bmi.form';
import { IBmiModel } from '../../../models/bmi.model';
import { UpdateBmi, AddBmi, DeleteBmi, LoadBmiById } from '../../../state/bmi.actions';
import { BmiState } from '../../../state/bmi.state';

@Component({
  selector: 'app-add-update-delete-bmi',
  templateUrl: './add-update-delete-bmi.component.html',
  styleUrls: ['./add-update-delete-bmi.component.scss'],
})
export class AddUpdateDeleteBmiComponent implements OnDestroy, OnInit {
  form: BmiForm;

  private id: string;
  private subscription = new Subscription();

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.checkIsId();
    this.setForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  saveBmi(): void {
    if (!this.form.valid) {
      return;
    }

    if (this.form.id.value.length === 36) {
      this.store.dispatch(new UpdateBmi(this.form.value));
    } else {
      this.store.dispatch(new AddBmi(this.form.value));
    }
  }

  deleteBmi(): void {
    this.store.dispatch(new DeleteBmi(this.form.id.value));
  }

  routeTo(): void {
    this.router.navigate(['/']);
  }

  private checkIsId(): void {
    this.activatedRouter.params.subscribe((data: Params) => {
      this.id = data['id'];
    });
  }

  private setForm(): void {
    if (this.id.length === 36) {
      this.getBmiById(this.id);
    } else {
      this.form = new BmiForm();
    }
  }

  private getBmiById(id: string): void {
    this.subscription.add(
      this.store.dispatch(new LoadBmiById(id)).subscribe(() => {
        this.store
          .select(BmiState.bmiById)
          .pipe(map((filterFn) => filterFn(this.id)))
          .subscribe((bmiFromId: IBmiModel | undefined) => {
            if (bmiFromId) {
              this.form = new BmiForm(bmiFromId);
            } else {
              this.form = new BmiForm();
            }
          });
      })
    );
  }
}
