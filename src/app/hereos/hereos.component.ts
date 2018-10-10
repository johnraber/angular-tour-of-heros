import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../hero.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-hereos',
  templateUrl: './hereos.component.html',
  styleUrls: ['./hereos.component.css']
})
export class HereosComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.getHeroes();
  }

  // Server passes back values once since it is linked to an http
  //  call that returns an Observable that only emits once then completes
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes);
  }

  add(name: string): Observable<Hero> {
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
