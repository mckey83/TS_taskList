import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Todo} from '../shared/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() task: Todo;
  @Output() delete = new EventEmitter();

  toggle(){
    this.task.completed = !this.task.completed;
  }

  onDelete(){
    this.delete.emit(this.task);
  }
}
