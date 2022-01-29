import {Injectable} from '@angular/core';
import {Hero} from "../../models/hero";
import {MessageService} from "../message/message.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {HERO_API_BASE_URL} from "../../constants/hero";

interface HeroResponse {
  data: {
    [key: string]: Hero
  }
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getHeroes(): Observable<HeroResponse> {
    return this.http
      .get<HeroResponse>(`${HERO_API_BASE_URL}/champion.json`)
  }

  getHero(id: string): Observable<HeroResponse> {
    return this.http
      .get<HeroResponse>(`${HERO_API_BASE_URL}/champion/${id}.json`)
  }
}
