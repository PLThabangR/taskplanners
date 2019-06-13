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
  constructor(private todoService:TodoDataService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    //We are getting the Id from the user using the route parameter
    this.id = this.route.snapshot.params['id'];

    //Creating a new object to initialize the
    this.todo =new Todo(1,"",false,new Date())
    //We are calling a todo service which was injected 
    this.todoService.retrieveTodo('username', this.id)
    .subscribe(
      data=>this.todo =data
    )
  }

  public save(){
    console.log("save works");
  }

}
