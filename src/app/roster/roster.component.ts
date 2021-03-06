import { Component, OnInit } from '@angular/core';

import { PlayersService } from '../players.service';
import { Player } from '../player';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.sass']
})
export class RosterComponent implements OnInit {

  players: Player[] = [];
  lineup: Player[] = [];
  rotation: Player[] = [];
  nextPlayerIndex: number = 14;

  constructor(private playersService: PlayersService) {
    this.playersService.getPlayerNames().subscribe((names: string[]) => {
      this.players = names.map((name: string) => {
        return {
          name: name,
          rating: this.generateRating()
        };
      });

      this.lineup = this.players.slice(0, 9);
      this.rotation = this.players.slice(9, 14);
    });
  }

  ngOnInit(): void { }

  generateRandomRating(min: number, max: number): number {
    const num = 10 * (Math.random() * (max - min) + min);

    return Number(num.toFixed(2))
  }

  generateRating(): number {
    const ratings = [
      this.generateRandomRating(0.55, 0.8),
      this.generateRandomRating(0.28, 0.55),
      this.generateRandomRating(0.28, 0.55),
      this.generateRandomRating(0.28, 0.55),
      this.generateRandomRating(0.28, 0.55),
      this.generateRandomRating(0.28, 0.55),
      this.generateRandomRating(0.28, 0.55),
      this.generateRandomRating(0.28, 0.55),
      this.generateRandomRating(0.28, 0.55),
      this.generateRandomRating(0.28, 0.55),
      this.generateRandomRating(0.05, 0.4)
    ];

    return ratings[Math.floor(Math.random() * ratings.length)];
  }

  addPlayer(position: string) {
    let rosterPos = this.lineup;

    if (position === 'rotation') {
      rosterPos = this.rotation;
    }

    if (this.nextPlayerIndex >= this.players.length) {
      this.nextPlayerIndex = 14;
    }

    rosterPos.push(this.players[this.nextPlayerIndex++]);
  }

  revokePlayer(evt: any, position: string, i: number) {
    let rosterPos = this.lineup;

    if (position === 'rotation') {
      rosterPos = this.rotation;
    }

    rosterPos.splice(i, 1);
  }

}
