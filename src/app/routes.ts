import { Routes } from '@angular/router';
import { UsersListComponent } from './users/users-list/users-list.component';
import { MainViewComponent } from './layout/main-view/main-view.component';

export const routes: Routes = [
    {
        path: '',
        component: MainViewComponent,
        children: [
            {
                path: 'users',
                loadChildren: './users/users.module#UsersModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    }
];
