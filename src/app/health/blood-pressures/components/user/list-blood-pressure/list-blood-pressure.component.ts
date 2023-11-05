import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BloodPressureState } from '../../../state/blood-pressure.state';
import { IBloodPressureModel } from '../../../models/blood-pressure.model';
import { BloodPressureApiService } from '../../../services/blood-pressure-api.service';

@Component({
  selector: 'app-list-blood-pressure',
  templateUrl: './list-blood-pressure.component.html',
  styleUrls: ['./list-blood-pressure.component.scss'],
})
export class ListBloodPressureComponent implements OnInit {
  @Select(BloodPressureState.bloodPressuresFetched)
  fetchBloodPressures$: Observable<IBloodPressureModel>[];
  data$: Observable<IBloodPressureModel[]>;

  columnsToDisplay: string[] = ['diastolicPressure', 'systolicPressure', 'pulse', 'measurementAt'];
  url: string = "dupa";

  constructor(private service: BloodPressureApiService, private router: Router) {}

  ngOnInit(): void {
    this.data$ = this.service.getAllBloodPressures();
  }

  routeTo(): void {
    this.router.navigate(['/blood-pressure/new']);
  }
}
