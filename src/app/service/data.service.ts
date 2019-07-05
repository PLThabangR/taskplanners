import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//We are creating a simple bean defining the structure of the respond
export class HelloWorldBean{
  //We expect a message from the back end
constructor(public message:string){}
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  executeDataService(){
    //we create a method which is eqaul to basic auth return  value
    let basicAuthHeaderString = this.basicAuth();
    let headers = new HttpHeaders({
      //We creating a object
      //We are creating an instance of http and passing the authorization object
      Authorization : basicAuthHeaderString 
    })

    //Use generics to define what type of respond I am expecting back
   return this.http.get<HelloWorldBean>('http://localhost:8090/hello-world-bean1');
  }


  basicAuth(){
    let username ="thabang"
    let password ="2465"

    let basicAuthHeaderString ='Basic'+window.btoa(username + ':'+password); //Use window.btoa to incode auth 
//window.btoa is provided by the java script
//We need to send this as part of the headers 
return basicAuthHeaderString;
  }
}
