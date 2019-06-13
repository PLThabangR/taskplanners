import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todo/list-todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  
  constructor(private http :HttpClient) { }

  retrieveAllTodos(username){
    //Use generics to define what type of respond I am expecting back
    //This can be the structure of my oblect
   return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodo(username,id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
   
  }

  retrieveTodo(username ,id){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
   
  }
}

