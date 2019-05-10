import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';

export const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            {
                path: 'list',
                component: UsersListComponent
            },
            {
                path: 'add',
                component: AddUserComponent
            }
        ]
    }
];
