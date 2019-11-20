import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  @ViewChild(HeroDetailComponent)
  hdc: HeroDetailComponent;
 
  //automatically initialises the heroService variable
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    console.log(this.hdc.hero);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  };

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
