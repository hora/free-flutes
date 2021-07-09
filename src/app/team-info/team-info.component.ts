import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.sass']
})
export class TeamInfoComponent implements OnInit {

  fluteSet: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleFlute() {
    this.fluteSet = !this.fluteSet;
  }

}
