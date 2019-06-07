import { Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AddTaskComponent } from './add-task/add-task.component';

export const routes: Routes = [
    {
        path: '',
        component: TasksComponent,
        children:[
            {
                path: 'list',
                component: TasksListComponent
            },
            {
                path: 'add-task',
                component: AddTaskComponent
            },
            {
                path: 'add-task/:id',
                component: AddTaskComponent
            }
        ]
    }
];