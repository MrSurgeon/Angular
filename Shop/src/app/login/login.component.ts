import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { NgForm } from '@angular/forms';
import { user } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private accountService: AccountService) {

  }
  model: user = new user();
  login(form: NgForm) {
    this.accountService.login(this.model);
  }
}
