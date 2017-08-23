import {Component, OnInit} from '@angular/core';
import {Task} from '../shared/task';
import {TaskService}  from '../shared/task.service';


@Component({
  moduleId: module.id,
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  tasks: Task[];

  constructor(private taskService:TaskService){
    this.tasks = [];
  }

  ngOnInit(){
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  delete(todo:Task) {
    this.taskService.delete(todo);
  }

  toggle(todo:Task){
    this.taskService.toggle(todo);
  }
}
