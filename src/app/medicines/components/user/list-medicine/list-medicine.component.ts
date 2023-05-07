import { Component } from '@angular/core';
import { MedicineApiService } from 'src/app/medicines/services/medicine-api.service';

@Component({
  selector: 'app-list-medicine',
  templateUrl: './list-medicine.component.html',
  styleUrls: ['./list-medicine.component.css'],
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

  constructor(private service: MedicineApiService) {}

  getAllMedicines$ = this.service.getAllMedicines();
}
