import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabPaneComponent } from './tab-pane/tab-pane.component';
import { TeamModsComponent } from './team-mods/team-mods.component';
import { RosterComponent } from './roster/roster.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamInfoComponent,
    TabsComponent,
    TabPaneComponent,
    TeamModsComponent,
    RosterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
