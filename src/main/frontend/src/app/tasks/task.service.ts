import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Http} from "@angular/http";

@Injectable()
export class TaskService {


  constructor(private http: Http) {
  }

  getTasks() {
    return this.http.get('/api/tasks').map(response => response.json());
  }
}
