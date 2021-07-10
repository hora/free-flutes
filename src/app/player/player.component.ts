import { Component, OnInit, Input, Output, ElementRef, HostListener, EventEmitter } from '@angular/core';

import { Player } from '../player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player = {
    name: 'Loading',
    rating: 1
  };

  @Output() revoke: EventEmitter<any> = new EventEmitter<any>();

  //@Input() position: string = '';
  //@Input() i: number = -1;

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.toggleStarsInput(false);
    }
  }

  showStarsInput: boolean = false;

  constructor(private eRef: ElementRef) {}

  createRange(num: number) {
    const items: number[] = [];

    for (let i = 0; i < num; i++) {
      items.push(i);
    }

    return items;
  }

  getBaseStars(): number {
    return Math.floor(this.player.rating);
  }

  getDecimalWidth(): number {
    const decimalStars = this.player.rating % 1;

    if (decimalStars > 0.35) {
      return 18 * decimalStars;
    }  else if (decimalStars === 0) {
      return 0;
    } else {
      return 18 * 0.35;
    }
  }

  toggleStarsInput(state: boolean) {
    this.showStarsInput = state;
  }

  onRevoke() {
    this.revoke.emit();
  }

  ngOnInit(): void { }

}
