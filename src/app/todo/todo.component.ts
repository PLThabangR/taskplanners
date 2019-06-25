import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todo/list-todo.component';
import { ActivatedRoute } from '@angular/router';

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
              private route:ActivatedRoute) { }

  ngOnInit() {
    //We are getting the Id from the user from the route parameter
    this.id = this.route.snapshot.params['id'];

    //Creating a new object to initialize the todo
    this.todo =new Todo(1,"",false,new Date())
   // We are calling a todo service which was injected 
    this.todoService.retrieveTodo('username', this.id)
    .subscribe(
      //feed back from our request
      data =>this.todo =data  
   )
  }

  public save(){
    console.log("Update successfuly");

    //To save a todo we need to call a tode data service
    this.todoService.updateTodo('username', this.id,this.todo)
          .subscribe(
            //Return the data of the updated todo
            data => console.log(data)
          )
  }

}
