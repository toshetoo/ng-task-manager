import { Component, OnInit } from '@angular/core';
import TaskInterface from '../models/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: TaskInterface[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getAllTasks().subscribe((tasks) => {
      console.log(tasks);
      this.tasks = tasks;
    });
  }

  onTaskDeleted(id: string): void {
    this.tasksService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== id);
    });
  }

}
