import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import TaskInterface from '../models/task.model';
import { TasksService } from '../tasks.service';
import AuthService from '../../auth/auth.service';
import AssigneeInterface from '../models/assignee.model';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input() task: TaskInterface;
  @Output() onDelete = new EventEmitter();

  isLoggedIn: boolean = false;

  constructor(private tasksService: TasksService,
              private authService: AuthService,
              private router: Router) { 

                this.isLoggedIn = this.authService.isLoggedIn();
              }

  ngOnInit() {
  }

  onAssignClick() {
    const userId = this.authService.getLoggedUser().id;
    if (this.task.assignees.findIndex(u => u.id === userId) !== -1) 
      return;
    
      const assignee: AssigneeInterface = {
        name: this.authService.getLoggedUser().name,
        id: userId
      };
    this.task.assignees.push(assignee);

    this.tasksService.assignTask(this.task).subscribe(() => {
      console.log('SUCCESS ASSIGN');
    });
  }

  onDeleteClick(): void {
    this.onDelete.emit(this.task.id);
  }

  onEditClick(): void {
    this.router.navigate(['tasks/add-task', this.task.id]);
  }

  get canAssign(): boolean {
   const user = this.authService.getLoggedUser();

   if(!user) 
    return false;

    const userId = user.id;

    return this.task.assignees.findIndex(u => u.id === userId) === -1;
  }

}
