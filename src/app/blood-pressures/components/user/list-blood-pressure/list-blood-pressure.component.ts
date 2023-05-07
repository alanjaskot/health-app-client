import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IBloodPressure } from 'src/app/blood-pressures/models/blood-pressure.model';
import { BloodPressureState } from 'src/app/blood-pressures/state/blood-pressure.state';

@Component({
  selector: 'app-list-blood-pressure',
  templateUrl: './list-blood-pressure.component.html',
  styleUrls: ['./list-blood-pressure.component.css'],
})
export class ListBloodPressureComponent {
  @Select(BloodPressureState.bloodPressuresFetched)
  fetchBloodPressures$: Observable<IBloodPressure>[];

  columnsToDisplay = ['id', 'diastolic pressure', 'systolic pressures', 'pulse'];
}
