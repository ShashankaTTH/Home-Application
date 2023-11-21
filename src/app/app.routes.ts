import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckHomesComponent } from './check-homes/check-homes.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { AddhomeComponent } from './addhome/addhome.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'checkhomes',component:CheckHomesComponent},
    {path:'Homedetails/:id',component:HomedetailsComponent},
    {path:'addhomes',component:AddhomeComponent}
];
