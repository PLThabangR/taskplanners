import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

 export class Todo{ 
   constructor(public id:number,public description:string,public done :boolean,public targetDate:Date){
   }
 }

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})

export class ListTodoComponent implements OnInit {

  todos:Todo[];
  massege:String;

   constructor(private todoService:TodoDataService,
              private router :Router) { }

  ngOnInit() {
    this.refreshTodo();
  }

  refreshTodo(){
    this.todoService.retrieveAllTodos("thabang").subscribe(
      response =>{
       //console.log(response);
        this.todos =response;
  }
    )
}

  deleteTodo(id){
    console.log(`delete ${id}`);
  this.todoService.deleteTodo('thabang',id).subscribe(
    response => {
      console.log(response);
      
      this.massege=`delete of todo ${id} successful`
     this.refreshTodo();
    },

    error =>{
      console.log(error);
    }
  )}

  updateTodo(id){
    console.log("update todo");
    this.router.navigate(['todo',id])
  }

  addTodo(){
    //If todo is -1 one it will help us to understand that the user is trying to add a new todo
    this.router.navigate(['todo',-1])
  }
}
