import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';
import { BasicAuthService } from '../service/http/basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username =''
 password=''
 errorMessage='Invalid Credentials'
 correct='correct credential'
 invalidLogin :boolean=false
 validLogin :boolean=false
 //Use dependency injection in the constructor to 
 //make a router a member variable login component ts
  constructor(private router:Router,private hardcodedAuthService:HardcodedAuthService
    ,private basicAuthdervice :BasicAuthService) { }

  ngOnInit() {
  }
handleLogin(){
  
if(this.hardcodedAuthService.authenticate(this.username,this.password))
{ this.validLogin=true
  this.invalidLogin=false
  //Redirect the page using the router 
  //We pass the parameter of the user
  this.router.navigate(['welcome',this.username])

}else{
  this.invalidLogin=true
  this.validLogin=false
}
}

handleLBasicAuth(){
  
  this.basicAuthdervice.executeAuthenticationService(this.username,this.password)
        .subscribe(
          response=> {
            console.log(response)
            this.invalidLogin=false
            this.router.navigate(['welcome',this.username])
          
          
          },
          error =>{
            console.log(error)
            this.invalidLogin=true

          }



            
        )
 
 
 
  
  }

}
