import { Routes } from '@angular/router';
import { Home } from './home/home';
import { WorkshopsList } from './workshops/workshops-list/workshops-list';
import { AddWorkshop } from './workshops/add-workshop/add-workshop';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {
        path:'',
        component:Home,
        title:'Workshop Apps',
    },
    {
        path:'home',
        component:Home,
        pathMatch:'full',
    },
    {
        path:'**',
        component:PageNotFound,
       title:'page not found'
    },
];
