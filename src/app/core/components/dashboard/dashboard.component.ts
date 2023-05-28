import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserApiService } from '../../services/auth-user-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthUserApiService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }
}
