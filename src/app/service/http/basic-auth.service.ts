import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private httpurl:HttpClient) { }

    executeAuthenticationService(username,password){ //passing user name and password
   
  //window.btoa is provided by the java script
  //We need to send this as part of the headers
      let basicAuthHeader = 'Basic' +  window.btoa(username + ':'+password); //Use window.btoa to incode auth 

     
      let headers = new HttpHeaders({
        Authorization : basicAuthHeader
      })
        //We are adding more declarations  using pipe after de respond is succesful 
      return this.httpurl.get<AuthorizationBean>('http://localhost:8090/basicAuth',{headers}).pipe(
        //When we get the data successfully we will set some username at password in the session storage
      map(  //We map the respond to set some condition to the session storage
        data =>{
          sessionStorage.setItem('authenticaterUser', username); //if the request succeed set something into storage
          sessionStorage.setItem('token', basicAuthHeader); //if the request succeed set something into storage
          return data;
        }
      )
      )
      
    }
    getAuthenticatedUser(){
      return sessionStorage.getItem('authenticaterUser')
     
    }

    getAuthenticatedToken(){
      if(this.getAuthenticatedUser())
      return sessionStorage.getItem('authenticaterUser')
     
    }
  isUserLogged(){
    let user =  sessionStorage.getItem('authenticaterUser')
    return !(user===null);
  }
  logUserOut(){
    sessionStorage.removeItem('authenticaterUser')
    sessionStorage.removeItem('token')
    
  }

  
}

export class AuthorizationBean{
 constructor(public massege:String){

 }
}
