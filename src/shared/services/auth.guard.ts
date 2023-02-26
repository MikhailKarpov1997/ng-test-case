import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router"
import { Observable } from "rxjs"

@Injectable()

export class AuthGuard implements CanActivate {
    constructor() {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem('token') != undefined){
        return true;
    } 
        window.location.replace('/login');  
        return false;
  }


}
