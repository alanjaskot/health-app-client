import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IBmiModel } from '../../../models/bmi.model';
import { LoadBmis } from '../../../state/bmi.actions';
import { BmiState } from '../../../state/bmi.state';

@Component({
  selector: 'app-list-bmi',
  templateUrl: './list-bmi.component.html',
  styleUrls: ['./list-bmi.component.scss'],
})
export class ListBmiComponent implements OnInit {
  @Select(BmiState.bmiFetched) data$: Observable<IBmiModel[]>;
  columnsToDisplay: string[] = ['bmi', 'height', 'weight'];

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadBmis());
  }

  routeTo(): void {
    this.router.navigate(['/bmi/new']);
  }
}
