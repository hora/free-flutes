import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamModsComponent } from './team-mods.component';

describe('TeamModsComponent', () => {
  let component: TeamModsComponent;
  let fixture: ComponentFixture<TeamModsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamModsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamModsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
