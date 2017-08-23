import {InMemoryDbService} from "angular-in-memory-web-api";

import {Task} from './task';

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const tasks: Task[] = [
      new Task('learn JavaScript'),
      new Task('learn TypeScrip'),
      new Task('create program')
    ];
  return {tasks};
  }


}


