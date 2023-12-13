import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ViewTodoComponent } from './Components/view-todo/view-todo.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {title: 'Home'}
    }
];
