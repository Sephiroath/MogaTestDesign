import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { VotingRoutingModule } from './voting-routing.module';
import { VotingComponent } from './voting/voting.component';
import { CurrentVotingComponent } from './current-voting/current-voting.component';


@NgModule({
  imports: [
    SharedModule,
    VotingRoutingModule
  ],
  declarations: [VotingComponent, CurrentVotingComponent]
})
export class VotingModule { }
