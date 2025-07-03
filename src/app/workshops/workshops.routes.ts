import {  Routes } from "@angular/router";
import { WorkshopsList } from "./workshops-list/workshops-list";
import { AddWorkshop } from "./add-workshop/add-workshop";
import { Favorites } from "./favorites/favorites";
import { WorkshopDetails } from "./workshop-details/workshop-details";

export const routes: Routes = [
    {
        path:'workshops',
        component:WorkshopsList,
        title:'List of workshops',
    },
    {
        path:'workshops/add',
        component:AddWorkshop,
        title:'add a workssop',
    },
    {
        path:'workshops/favroite',
        component:Favorites,
        title:'favaroite Workshop Apps',
    },
    {
        path:'workshops/:id',
        component:WorkshopDetails,
        title:'Workshop Details',
    }
]