import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Task} from '../shared/task';

@Component({
  selector: 'todo-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent {
  @Input() task: Task;
  @Output() delete = new EventEmitter();
  @Output() toggle = new EventEmitter();

  onToggle(){
    this.toggle.emit(this.task);
  }

  onDelete(){
    this.delete.emit(this.task);
  }
}
