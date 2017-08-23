
export class Task {
  static counter : number = 0;
  id: number;
  constructor(public title: string,
              public completed: boolean = false) {
    this.id = Task.counter++;
    this.title = this.id+'. '+title;
  }
}
