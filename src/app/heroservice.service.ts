import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroserviceService {

  constructor(public messageService : MessageService) { }
  //synchronous way of assigning hero list from constant
  // getHeroes():Hero[]{
  //   return HEROES;
  // }

  //async way
  // getHeroes():Observable<Hero[]>{
  //   const heroes =of(HEROES);
  //   return heroes;
  // }
  getHeroes():Observable<Hero[]>{
    const heroes=of(HEROES);
    this.messageService.addMsg("Heroes list is successfully fetched!!");
    return heroes;
  }
  getHero(id:Number):Observable<Hero>{
    const hero =HEROES.find(h=>h.id===id)!;
    this.messageService.addMsg(`HeroService :fetched hero id=${id}`);
    return of(hero);
  }
}
