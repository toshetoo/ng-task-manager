import { Routes } from '@angular/router';
import { UsersListComponent } from './users/users-list/users-list.component';
import { MainViewComponent } from './layout/main-view/main-view.component';
import { AuthenticatedGuard } from './auth/guards/authenticated.guard';
import { NonAuthenticatedGuard } from './auth/guards/non-authenticated.guard';

export const routes: Routes = [
    {
        path: '',
        component: MainViewComponent,
        children: [
            {
                path: 'users',
                loadChildren: './users/users.module#UsersModule',
                canLoad: [AuthenticatedGuard]
            }
        ]
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule',
        canLoad: [NonAuthenticatedGuard]
    },
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    }
];
