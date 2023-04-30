import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/auth-user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoging: boolean;

  constructor(private authService: UserService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
