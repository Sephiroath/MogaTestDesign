import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotingComponent } from './voting/voting.component';
import { CurrentVotingComponent } from './current-voting/current-voting.component';

const routes: Routes = [
  {
    path: '',
    component: VotingComponent,
    children: [
      {
        path: '',
        redirectTo: 'currentvoting',
        pathMatch: 'full'
      },
      {
        path: 'currentvoting',
        component: CurrentVotingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotingRoutingModule {}
