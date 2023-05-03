import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MedicineForm } from 'src/app/medicines/form/medicine.form';
import { IMedicineModel } from 'src/app/medicines/models/medicine.model';
import { MedicineService } from 'src/app/medicines/services/medicine.service';

@Component({
  selector: 'app-add-edit-delete-medicine',
  templateUrl: './add-edit-delete-medicine.component.html',
  styleUrls: ['./add-edit-delete-medicine.component.css'],
})
export class AddEditDeleteMedicineComponent implements OnInit {
  id: string;
  form: MedicineForm;

  private subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: MedicineService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.activatedRoute.params.subscribe((data: Params) => {
        if (data['id'] !== 'new') {
          console.log('id length =>', data['id'].length);
        } else {
          this.form = new MedicineForm();
        }
      })
    );

    const date = new Date();

    const med: IMedicineModel = {
      id: '10',
      name: 'ter',
      dose: 8,
      unit: 'g',
      medicalDosage: 8,
      updated: date,
      created: date,
    };

    this.service.addMedicine(med);
  }

  addMedicine() {
    this.service.addMedicine(this.form.value);
  }
}
