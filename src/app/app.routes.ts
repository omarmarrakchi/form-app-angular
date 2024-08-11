import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddFormComponent } from './pages/add-form/add-form.component';
import { FormResponseComponent } from './pages/form-response/form-response.component';
import { FormDetailComponent } from './pages/form-detail/form-detail.component';
import { ReponseDetalComponent } from './pages/reponse-detal/reponse-detal.component';

export const routes: Routes = [
    {
       path: '', redirectTo: 'login', pathMatch: 'full'

    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: '',
        component:LayoutComponent,
        children:[
            {
                path: 'dashboard',
                component:DashboardComponent
            },
            {
                path: 'add-form',
                component: AddFormComponent
            },
            
            {
                path: 'form-details/:id',
                component: FormDetailComponent
            }, 
            {
                path: 'repose-details/:id',
                component: ReponseDetalComponent
            }
        ]
    },
    {
        path: 'form-response/:id',
        component: FormResponseComponent
    },
];
