import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_url } from '../constant';

export const Token ='token'
export const AuthenticaterUser = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})

export class BasicAuthService {

  constructor(private httpurl:HttpClient) { }

    executeAuthenticationService(username,password){ //passing user name and password
   
  //window.btoa is provided by the java script
  //We need to send this as part of the headers
      let basicAuthHeader = 'Basic ' +  window.btoa(username + ':'+password); //Use window.btoa to incode auth 

     
      let headers = new HttpHeaders({
        Authorization : basicAuthHeader
      })
        //We are adding more declarations  using pipe after de respond is succesful 
      return this.httpurl.get<AuthorizationBean>(`${API_url}/basicAuth`,{headers}).pipe(
        //When we get the data successfully we will set some username at password in the session storage
      map(  //We map the respond to set some condition to the session storage
        data =>{
          sessionStorage.setItem(AuthenticaterUser, username); //if the request succeed set something into storage
        
          sessionStorage.setItem(Token, basicAuthHeader); //if the request succeed set something into storage
          return data;
        }
      )
      )
      
    }
    getAuthenticatedUser(){
      return sessionStorage.getItem(AuthenticaterUser)
     
    }

    getAuthenticatedToken(){
      if(this.getAuthenticatedUser())
      return sessionStorage.getItem(AuthenticaterUser)
     
    }
  isUserLogged(){
    let user =  sessionStorage.getItem(AuthenticaterUser)
    return !(user===null);
  }
  logUserOut(){
    sessionStorage.removeItem(AuthenticaterUser)
    sessionStorage.removeItem(Token)

  }

  
}

export class AuthorizationBean{
 constructor(public massege:String){

 }
}
