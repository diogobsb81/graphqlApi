import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeamsComponent } from './teams/teams.component';

const routes: Route[] = [
  { path: '', component: TeamsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
