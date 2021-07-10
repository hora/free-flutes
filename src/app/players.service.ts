import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private onomancerUrl = 'https://onomancer.sibr.dev/api/getNames?threshold=10&limit=14&random=1';

  constructor(private http: HttpClient) { }

  getPlayerNames(): Observable<string[]> {
    const players: string[] = [
      'Summers Preston',
      'Randy Castillo',
      'Bonk Jokes',
      'Winnie Hess',
      'P. R. Swelcome',
      'Tiana Wheeler',
      'Lottie Ceilingfan',
      'Tillman Henderson',
      'Landry Violence',
      'Anathema Elemefayo',
      'Freemium Seraph',
      'Jacoby Podcast',
      'Juice Collins',
      'Owen Picklestein',
      'Dervin Gorczycza',
      'Baby Triumphant',
      'PolkaDot Patterson',
      'Jessica Telephone',
      'Kelvin Drumsolo',
      'Chorby Short',
      'Uncle Plasma',
      'Rat Mason',
      'Siliva Rugrat',
    ];

    return of(players);

    //return this.http.get<string[]>(this.onomancerUrl);
  }
}
