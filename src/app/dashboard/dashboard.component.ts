import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroserviceService } from '../heroservice.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  heroes:Hero[]=[]

  constructor(private heroService:HeroserviceService){

  }
  ngOnInit():void{
    this.getHeroes();
  }
  getHeroes():void{
   this.heroService.getHeroes()
   .subscribe(heroes => this.heroes=heroes.slice(1,5));
  }

}
