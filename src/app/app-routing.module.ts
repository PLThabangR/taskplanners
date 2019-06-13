import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterGaurdService } from './service/router-gaurd.service';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: '',component: LoginComponent },
  {path: 'login',component: LoginComponent },

  {path: 'welcome/:name',component: WelcomeComponent,canActivate:[RouterGaurdService]
  },
  {path: 'todos',component: ListTodoComponent,canActivate:[RouterGaurdService]
  },
  {path: 'logout',component: LogoutComponent,canActivate:[RouterGaurdService]
  },
  {path: 'todo/:id',component: TodoComponent,canActivate:[RouterGaurdService]
  },
  {path: '**',component: ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
