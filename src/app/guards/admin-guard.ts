import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, tap } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({providedIn: 'root'})
export class AdminGuard implements CanActivate{
  constructor(
    private authService: AuthService,
    private route : Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      return this.authService.user.pipe(
        map(user => {
          if(user != null && user.email == 'anildursunipek@gmail.com'){
            return true;
          }
          return false;
        }),
        tap(isAdmin => {
          if(!isAdmin){
            this.route.navigate(['/account'])
          }
        })
      )
  }

}
