import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor {

  constructor() { }
//It acts like a filter to methods
//Every request which is csend out
  intercept (request:HttpRequest<any>,next: HttpHandler){ //We are inercepting the request
    let username ="thabang"
    let password ="2465"
//window.btoa is provided by the java script
//We need to send this as part of the headers
    let basicAuthHeaderString = 'Basic' +  window.btoa(username + ':'+password); //Use window.btoa to incode auth 
 //We want to add a hearder to every request that is sent out

    request=request.clone({//We clone it and override some certain properties since this methods cannot be modified
      setHeaders :{
        Authorization:basicAuthHeaderString
      } //The only thing which is changing is adding authorization
    })
    //We are sending the modified request
    return next.handle(request);//We are sending it to the next http handler
  }
}
