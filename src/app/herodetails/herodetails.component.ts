import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { NgIf, UpperCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroserviceService } from '../heroservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-herodetails',
  standalone: true,
  imports: [FormsModule,NgIf,UpperCasePipe],
  templateUrl: './herodetails.component.html',
  styleUrl: './herodetails.component.css',
})
export class HerodetailsComponent {
  // @Input() hero!: Hero;
  hero: Hero | undefined;
  constructor(
    private route:ActivatedRoute,
    private heroService:HeroserviceService,
    private location:Location
  ){  }

  ngOnInit():void{
    this.getHero();
  }

  getHero():void{
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
    .subscribe(hero =>this.hero = hero);
  }
  goBack():void{
    this.location.back();
  }

}
 