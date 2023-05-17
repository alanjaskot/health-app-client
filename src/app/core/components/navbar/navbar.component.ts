import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  routeTo(): void {
    this.router.navigate(['/login']);
  }

  routeToBloodPressure(): void {
    this.router.navigate(['/blood-pressure/list']);
  }

  routeToBmi(): void {
    this.router.navigate(['bmi/list']);
  }

  routeToMedicine(): void {
    this.router.navigate(['/medicine/list']);
  }
}
