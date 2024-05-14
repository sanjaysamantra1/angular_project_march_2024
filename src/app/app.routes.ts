import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'productlist', component: ProductListComponent },
    { path: 'productdetails/:id', component: ProductdetailsComponent },
    { path: '**', component: NotfoundComponent },
];
