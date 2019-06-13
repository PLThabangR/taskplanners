import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username,password){
   console.log(" Before "+this.isUserLogged())
    if(username === 'thabang' && password ==='2465')
    {
      // Store
      sessionStorage.setItem('authenticaterUser', username);

      console.log(" After "+this.isUserLogged())
      return true;
    }
      return false;
    }

  isUserLogged(){
    let user =  sessionStorage.getItem('authenticaterUser')
    return !(user===null);
  }
  logUserOut(){
    sessionStorage.removeItem('authenticaterUser')
  }

  
}
