import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todo/list-todo.component';
import { API_url, Todo_Jpa_url } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  
  constructor(private http :HttpClient) { }

  retrieveAllTodos(username){
    //Use generics to define what type of respond I am expecting back
    //This can be the structure of my object
   return this.http.get<Todo[]>(`${Todo_Jpa_url}/users/${username}/todos`);
  }

  deleteTodo(username,id){
    return this.http.delete(`${Todo_Jpa_url}/users/${username}/todos/${id}`);
   
  }

  retrieveTodo(username ,id){
    //Declare a todo data structure which it can map it to
    return this.http.get<Todo>(`${Todo_Jpa_url}/users/${username}/todos/${id}`);
   
  }
  //we need to add a third parameter for the details of the todo to be updtated
  updateTodo(username ,id,todo){
    //We need to pass a body as we did in the restlet
    //Since we are updating we use a put request
    return this.http.put<Todo>(`${Todo_Jpa_url}/users/${username}/todos/${id}`,todo);
   
  }

  
//we need to add a third parameter for the details of the todo to be updated
createTodo(username ,todo){
  //We need to pass a body as we did in the restlet
  //Since we are posting we use a post request
  return this.http.post<Todo>(`${Todo_Jpa_url}/users/${username}/todos`,todo);
 
}
  
}

