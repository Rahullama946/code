import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { HEROES } from '../mock-heroes';
import { HerodetailsComponent } from "../herodetails/herodetails.component";
import { HeroserviceService } from '../heroservice.service';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, NgFor, NgIf,RouterLink, HerodetailsComponent,HerodetailsComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  // providers:[HeroserviceService]
})
export class HeroesComponent {
  heroes:Hero[]=[];


  //injecting heroservice
  constructor(private heroService:HeroserviceService,
    private messageService:MessageService
  ){
  }

  ngOnInit(){
    this.getHeroes();
  }

  //method to retrive hero array from the hero service
  getHeroes():void{
    // this.heroes=this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes=heroes);
  }



  // selectedHero?:Hero;

  // onSelect(hero:Hero):void{
  //   this.selectedHero=hero;
  //   this.messageService.addMsg(`Selected hero with id=${hero.id}`)
  // }
}
