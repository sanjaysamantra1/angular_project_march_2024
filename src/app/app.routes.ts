import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { PermanentjobsComponent } from './components/permanentjobs/permanentjobs.component';
import { ContractjobsComponent } from './components/contractjobs/contractjobs.component';
import { teacherGuard } from './guards/teacher.guard';
import { employeeGuard } from './guards/employee.guard';
import { haschangesGuard } from './guards/haschanges.guard';
import { productdetailsResolver } from './resolvers/productdetails.resolver';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    {
        path: 'careers',
        component: CareersComponent,
        canActivateChild: [employeeGuard],
        canDeactivate: [haschangesGuard],
        children: [
            { path: 'permanent', component: PermanentjobsComponent },
            { path: 'contract', component: ContractjobsComponent }
        ]
    },
    { path: 'contactus', component: ContactusComponent },
    { 
        path: 'productlist', 
        loadComponent: () => import('./components/product-list/product-list.component').then(response => response.ProductListComponent) 
    },
    {
        path: 'productdetails/:id',
        component: ProductdetailsComponent,
        resolve: { product: productdetailsResolver }
    },
    { path: 'userlist', component: UserlistComponent, canActivate: [teacherGuard] },
    { path: 'userdetails', component: UserdetailsComponent },
    { path: '**', component: NotfoundComponent },
];
