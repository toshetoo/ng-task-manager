import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import TaskInterface from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  addTask(task: TaskInterface): Observable<any> {
    if (task.id) {
      return this.http.put(`http://localhost:3000/tasks/${task.id}`, task)
    }
    return this.http.post('http://localhost:3000/tasks', task)
  }

  public getAllTasks(): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>('http://localhost:3000/tasks');
  }

  public getById(id: string): Observable<TaskInterface> {
    return this.http.get<TaskInterface>(`http://localhost:3000/tasks/${id}`);
  }

  public assignTask(task: TaskInterface): Observable<any> {
    return this.http.put(`http://localhost:3000/tasks/${task.id}`, task);
  }

  public deleteTask(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/tasks/${id}`);
  }
}
