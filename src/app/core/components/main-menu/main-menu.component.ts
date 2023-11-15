import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FullPathRoutesEnum } from '../../enums/full-path-routes.enum';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  constructor(private router: Router) {}

  routeToBmi(): void {
    this.router.navigate(['/health/bmi/list']);
  }

  routeToBloodPressure(): void {
    this.router.navigate(['/health/blood-pressure/list']);
  }

  routeToMedicine(): void {
    this.router.navigate(['/health/medicine/list']);
  }

  routeToOperationType(): void {
    this.router.navigate([FullPathRoutesEnum.FINANCES_OPERATION_TYPE_LIST]);
  }

  routeToOperation(): void {
    this.router.navigate([FullPathRoutesEnum.FINANCES_OPERATION_LIST]);
  }
}
