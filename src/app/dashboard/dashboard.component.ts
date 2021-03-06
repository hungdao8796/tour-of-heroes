import {Component, OnInit} from '@angular/core';
import {Hero} from '../../models/hero';
import {HeroService} from "../../service/hero/hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  async getHeroes(): Promise<void> {
    // await this.heroService.getHeroes()
    //   .subscribe(response => this.heroes = response?.data?.slice?.(1, 5));
  }
}
