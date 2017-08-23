import {Task} from "./task";
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Injectable} from "@angular/core";


@Injectable()
export class TaskService{
  tasks:Task[] = [];
  private apiUrl = 'api/tasks';
  private headers;
  private options;

  constructor(private http: Http){
    this.headers = new Headers({'Content-Type:':'application/json'});
    this.options = new RequestOptions(this.headers);
  }

  getTasks(): Promise<Task[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(res => res.json().data)
      .then(tasks => this.tasks = tasks)
      .catch(this.errorHandler);
  }

  create(title:string){
    let taskNew = new Task(title);
    this.http.post(this.apiUrl, taskNew, this.options)
      .toPromise()
      .then(res => res.json().data)
      .then(taskNew => this.tasks.push(taskNew))
      .catch(this.errorHandler);
  }

  delete(task:Task) {
    let url = this.apiUrl+'/'+task.id;
    this.http.delete(url, this.options)
      .toPromise()
      .then(res => {
        let index = this.tasks.indexOf(task);
        if (index > -1) {
          this.tasks.splice(index, 1);
        }
      })
      .catch(this.errorHandler);
  }

  toggle(task:Task){
    let url = this.apiUrl+'/'+task.id;
    this.http.put(url, task, this.options)
      .toPromise()
      .then(res => {
        task.completed = !task.completed;
      })
      .catch(this.errorHandler);
  }

  private errorHandler(error : any){
    console.error('Occur error', error)
    return Promise.reject(error.message || error);
  }

}
