import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import TaskInterface from '../models/task.model';
import { TasksService } from '../tasks.service';
import AuthService from '../../auth/auth.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input() task: TaskInterface;
  @Output() onDelete = new EventEmitter();

  constructor(private tasksService: TasksService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onAssignClick() {
    const userId = this.authService.getLoggedUser().id;
    this.task.assigneeId = userId.toString();

    this.tasksService.assignTask(this.task).subscribe(() => {
      console.log('SUCCESS ASSIGN');
    });
  }

  onDeleteClick(): void {
    this.onDelete.emit(this.task.id);
  }

}
