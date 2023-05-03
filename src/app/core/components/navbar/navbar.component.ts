import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../../services/auth-user.service';
import { ITokenModel } from '../../models/token.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthUserService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
  }
}
