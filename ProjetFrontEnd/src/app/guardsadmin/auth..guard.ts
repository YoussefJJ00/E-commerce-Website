import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor( private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem("role")=="admin") {
      return true;
    } else {
      this.router.navigate(['/']); // Redirect to client route if not admin
      return false;
    }
  }
}
