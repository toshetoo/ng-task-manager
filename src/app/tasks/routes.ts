import { Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

export const routes: Routes = [
    {
        path: '',
        component: TasksComponent,
        children:[
            {
                path: 'list',
                component: TasksListComponent
            }
        ]
    }
];