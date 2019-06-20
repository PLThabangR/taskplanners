import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    //Use generics to define what type of respond I am expecting back
   return this.http.get<HelloWorldBean>('http://localhost:8090/hello-world-bean1');
  }
}
