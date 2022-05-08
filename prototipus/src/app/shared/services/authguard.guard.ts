import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavbarService } from './navbar.service';

@Injectable({
  providedIn: 'root',
})
export class AuthguardGuardService implements CanActivate {
  constructor(private _router: Router, public navbarService: NavbarService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (sessionStorage.getItem('CREDENTIALS') === null) {
      this._router.navigate(['/sign-in']);
      this.navbarService.userLoggedIn.next(false);
      return false;
    }
    this.navbarService.userLoggedIn.next(true);
    return true;
  }
}
