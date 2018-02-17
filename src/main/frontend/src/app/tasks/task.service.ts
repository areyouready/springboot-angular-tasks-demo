import {EventEmitter, Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Http, Response} from "@angular/http";
import {Task} from "./task.model";

@Injectable()
export class TaskService {


  onTaskAdded = new EventEmitter<Task>(); // needed to refresh UI after task is added

  constructor(private http: Http) {
  }

  getTasks() {
    return this.http.get('/api/tasks').map(response => response.json());
  }

  // saves modified existing tasks (merge)
  saveTask(task: Task, checked: boolean) {
    task.completed = checked; // when checkbox is checked, set task to completed

    return this.http.post('/api/tasks/save', task)
      .map(
        (response: Response) => {
          return response.json();
        }
      )
  }

  // adds new tasks
  addTask(task: Task) {
    return this.http.post('/api/tasks/save', task).map(response => response.json());
  }
}
