import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { routes } from './routes';
import { TaskCardComponent } from './task-card/task-card.component';

@NgModule({
    declarations: [TasksComponent, TasksListComponent, TaskCardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class TasksModule { }