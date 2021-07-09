import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.sass']
})
export class TeamInfoComponent implements OnInit {

  teamName: string = 'Montréal Detours';
  teamSlogan: string = '"Rue barrée."';
  teamArcana: string = 'XV The Devil';
  teamEmoji: string = '🚧';
  teamColour: string = '#d04803';

  showLogoPicker: boolean = false;
  logoPickerPosition: string = 'top: 0; left: 0;';
  fluteSet: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleFlute() {
    this.fluteSet = !this.fluteSet;
  }

  onToggleLogoPicker() {
    this.showLogoPicker = !this.showLogoPicker;

    if (this.showLogoPicker) {
      const logo = document.getElementById('team-info__logo');
      const posTop = logo ? logo.offsetTop - 25 : 0;
      const posLeft = logo ? logo.offsetLeft - 200 : 0;

      this.logoPickerPosition = `top: ${posTop}px; left: ${posLeft}px;`;
    }
  }

}
