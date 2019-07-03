import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todo/list-todo.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number;
  todo:Todo;

  //Auto wire the service in order to use it
  constructor(private todoService:TodoDataService,
              private route:ActivatedRoute,
              private router:Router
              ) { }

  ngOnInit() {
    //We are getting the Id from the user from the route parameter
    this.id = this.route.snapshot.params['id'];

    //Creating a new object to initialize the todo
    //we are referencing the this.id
    this.todo =new Todo(this.id,"",false,new Date())
    if(this.id!=-1){ //This retrieve will only run if the id is not eqauls -1
   // We are calling a todo service which was injected 
    this.todoService.retrieveTodo('username', this.id)
    .subscribe(
      //feed back from our request
      data =>this.todo =data  
   )
    }
  }

  public save(){
    console.log("Update successfuly");
    if(this.id===-1){ //This save will only run if the id is eqauls -1
      //If the id is minus one we need to call create 
//To create a todo we need to call a tode data service 
this.todoService.createTodo('username',this.todo)
.subscribe(
  //Return the data of the updated todo
  data => {console.log(data)
  this.router.navigate(['todos'])}
)
    }else{ // this will run if the todo id is not equals to -1
    //To save a todo we need to call a tode data service 
    this.todoService.updateTodo('username', this.id,this.todo)
          .subscribe(
            //Return the data of the updated todo
            data => {console.log(data)
            this.router.navigate(['todos'])}
          )
  }

}

}
