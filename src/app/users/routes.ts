import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
    {
        path: 'users',
        component: UsersListComponent
    },
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    }
];

export default routes;