import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminRoutesGuardGuard implements CanActivate {
  constructor(private router:Router, private auth:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.auth.isAdmin()){
        this.router.navigate(['/login'],{queryParams:{redirectUrl:state.url}});
        return false;
      }
      return true;
  }
  
}
