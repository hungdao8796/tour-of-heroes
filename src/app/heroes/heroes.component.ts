import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../service/hero/hero.service";
import {Hero} from "../../models/hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(response => {
      const heroes = response?.data || [];
      this.heroes = Object.keys(heroes).map(heroName => heroes[heroName]);
    });
  }
}
