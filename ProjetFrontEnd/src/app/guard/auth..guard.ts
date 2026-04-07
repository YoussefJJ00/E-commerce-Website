import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  constructor( private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem("role")=="client") {
      return true;
    } else {
      this.router.navigate(['/']); // Redirect to client route if not admin
      return false;
    }
  }
}
