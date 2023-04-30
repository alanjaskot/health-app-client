import { Component, OnInit } from '@angular/core';
import { ITokenModel } from '../../models/token.model';
import { UserService } from '../../services/auth-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: ITokenModel = {token: '', type: ''};

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.login('admin', '123').subscribe((respToken: ITokenModel) => {
      this.token = respToken;
      console.log(this.token)
    })
  }

}
