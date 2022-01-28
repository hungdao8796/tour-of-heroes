import { Component, OnInit } from '@angular/core';
import {Hero, mockHeroes} from "../../models/hero";
import {HeroService} from "../../service/hero/hero.service";
import {MessageService} from "../../service/message/message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = mockHeroes;
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id = ${hero.id}`)
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
