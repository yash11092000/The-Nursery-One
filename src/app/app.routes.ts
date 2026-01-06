import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=>import("./pages/home/home").then(x=>x.Home)
    },
    {
        path:'about',
        loadComponent:()=>import("./pages/about/about").then(x=>x.About)
    },
    {
        path:'plants',
        loadComponent:()=>import("./pages/plants/plants").then(x=>x.Plants)
    },
    {
        path:'contact',
        loadComponent:()=>import("./pages/contact/contact").then(x=>x.Contact)
    },
    {
    path: '**',
    redirectTo: ''
    }
];
