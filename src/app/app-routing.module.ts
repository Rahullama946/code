import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HerodetailsComponent } from './herodetails/herodetails.component';

const routes:Routes=[
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'heroes', component: HeroesComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'details/:id',component:HerodetailsComponent},
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }
