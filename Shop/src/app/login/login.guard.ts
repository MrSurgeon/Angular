import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "../services/account.service";

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private AccountService: AccountService, private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let logged = this.AccountService.isLoggedIn();
        if (logged) {
            return true;
        }
        this.router.navigate(["login"]);
        return false;
    }

}