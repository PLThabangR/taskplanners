import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthService } from './hardcoded-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGaurdService  implements CanActivate{
  
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcodedAuthService.isUserLogged())//If the user is logged in return true to 
    return true;
    //We are that the user back to the login
    this.router.navigate(['login']);

    return false;//If false is returned the canAtivte will block the router link
  }
//Use dependency injection to call other service using a contruct
  constructor(private hardcodedAuthService:HardcodedAuthService,private router:Router) { }

  
}
