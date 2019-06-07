import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { routes } from './routes';
import { TaskCardComponent } from './task-card/task-card.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
    declarations: [TasksComponent, TasksListComponent, TaskCardComponent, AddTaskComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})
export class TasksModule { }