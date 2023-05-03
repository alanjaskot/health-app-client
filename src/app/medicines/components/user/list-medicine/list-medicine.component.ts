import { Component } from '@angular/core';
import { MedicineService } from 'src/app/medicines/services/medicine.service';

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

  constructor(private medicineService: MedicineService) {}

  getAllMedicines$ = this.medicineService.getAllMedicines();
}
