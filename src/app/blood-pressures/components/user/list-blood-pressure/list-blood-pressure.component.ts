import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IBloodPressureModel } from 'src/app/blood-pressures/models/blood-pressure.model';
import { BloodPressureApiService } from 'src/app/blood-pressures/services/blood-pressure-api.service';
import { BloodPressureState } from 'src/app/blood-pressures/state/blood-pressure.state';

@Component({
  selector: 'app-list-blood-pressure',
  templateUrl: './list-blood-pressure.component.html',
  styleUrls: ['./list-blood-pressure.component.scss'],
})
export class ListBloodPressureComponent implements OnInit {
  @Select(BloodPressureState.bloodPressuresFetched)
  fetchBloodPressures$: Observable<IBloodPressureModel>[];
  data$: Observable<IBloodPressureModel[]>;

  columnsToDisplay = ['diastolic pressure', 'systolic pressure', 'pulse', 'measurement at'];

  constructor(private service: BloodPressureApiService, private router: Router) {}

  ngOnInit(): void {
    this.data$ = this.service.getAllBloodPressures();
  }

  routeTo(): void {
    this.router.navigate(['/blood-pressure/new']);
  }
}
