import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { error } from 'util';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name ='';
  welcomeMessageFromService :string;
  errorMessageFromSpring :string;
  //Use dependency injection to activate the route with params
  constructor(private route:ActivatedRoute,
              private dataservice:DataService){ }



  ngOnInit() {
    //Let the route navigate when there parameters passed in 
    this.name=this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
   console.log(this.dataservice.executeDataService());
   this.dataservice.executeDataService().subscribe(
    response => this.handleSuccessFullResponse(response),
    error => this.handleErrorResponse(error)
   );

  }

  handleSuccessFullResponse(response){
    this.welcomeMessageFromService = response.message
   
  }
  handleErrorResponse(error){

   this.errorMessageFromSpring = error.error.message;
  }

}
