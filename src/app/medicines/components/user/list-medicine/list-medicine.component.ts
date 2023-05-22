import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineApiService } from 'src/app/medicines/services/medicine-api.service';

@Component({
  selector: 'app-list-medicine',
  templateUrl: './list-medicine.component.html',
  styleUrls: ['./list-medicine.component.scss'],
})
export class ListMedicineComponent {
  displayingColumns: string[] = [
    'id',
    'name',
    'dose',
    'unit',
    'medicalDosage',
    'created',
    'updated',
  ];

  constructor(private service: MedicineApiService, private router: Router) {}

  getAllMedicines$ = this.service.getAllMedicines();

  routeTo(): void {
    this.router.navigate(['/medicine/new']);
  }
}
