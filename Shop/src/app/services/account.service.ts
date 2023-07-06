import { Injectable } from '@angular/core';
import { user } from '../login/user';

@Injectable()
export class AccountService {

  constructor() { }

  loggedIn = false;

  login(userObj: user): boolean {
    if (userObj.username == "Enes" && userObj.password == "12345") {
      this.loggedIn = true;
      localStorage.setItem("isLogged", userObj.username);
      return true;
    }
    return false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logout() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}
