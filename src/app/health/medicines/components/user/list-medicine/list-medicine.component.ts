import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MedicineState } from '../../../state/medicine.state';
import { LoadMedicines } from '../../../state/medicine.actions';
import { IMedicineModel } from '../../../models/medicine.model';

@Component({
  selector: 'app-list-medicine',
  templateUrl: './list-medicine.component.html',
  styleUrls: ['./list-medicine.component.scss'],
})
export class ListMedicineComponent implements OnInit{
  @Select(MedicineState.medicinesFetched) data$: Observable<IMedicineModel[]>;
  displayedColumns: string[] = [
    'name',
    'dose',
    'unit',
    'medical dosage'
  ];
  url: string = '/medicine';

  constructor(private router: Router, private store: Store) {}
  
  ngOnInit(): void {
    this.store.dispatch(new LoadMedicines)
  }

  routeTo(): void {
    this.router.navigate(['/medicine/new']);
  }
}
