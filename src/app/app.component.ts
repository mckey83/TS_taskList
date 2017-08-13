import {main} from '@angular/compiler-cli';
import {Component} from '@angular/core';
import {Todo} from "./shared/todo";
import {todos} from './shared/data';



@Component({
  moduleId: module.id,
  selector: 'app-my',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title: string = 'Angular2Do';
  path: string = '/assets/img/angular.png';
  todos: Todo[] = todos;

  create(title:string){
    const todo = new Todo(title);
    this.todos.push(todo);
  }





}
