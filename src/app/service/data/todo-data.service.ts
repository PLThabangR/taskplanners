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
    //This can be the structure of my object
   return this.http.get<Todo[]>(`http://localhost:8090/users/${username}/todos`);
  }

  deleteTodo(username,id){
    return this.http.delete(`http://localhost:8090/users/${username}/todos/${id}`);
   
  }

  retrieveTodo(username ,id){
    //Declare a todo data structure which it can map it to
    return this.http.get<Todo>(`http://localhost:8090/users/${username}/todos/${id}`);
   
  }
  //we need to add a third parameter for the details of the todo to be updtated
  updateTodo(username ,id,todo){
    //We need to pass a body as we did in the restlet
    //Since we are updating we use a put request
    return this.http.put<Todo>(`http://localhost:8090/users/${username}/todos/${id}`,todo);
   
  }

  
}

