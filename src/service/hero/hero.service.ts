import { Injectable } from '@angular/core';
import {Hero, mockHeroes} from "../../models/hero";
import {MessageService} from "../message/message.service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(mockHeroes);
    this.messageService.add('hero service: fetched heroes');
    return heroes;
  }
}
