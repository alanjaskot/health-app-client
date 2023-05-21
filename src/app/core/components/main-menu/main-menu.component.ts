import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent {
  constructor(private router: Router) {}

  routeToBmi(): void {
    this.router.navigate(['/bmi/list']);
  }

  routeToBloodPressure(): void {
    this.router.navigate(['blood-pressure/list']);
  }

  routeToMedicine(): void {
    this.router.navigate(['medicine/list']);
  }
}
