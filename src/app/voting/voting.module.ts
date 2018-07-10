import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { VotingRoutingModule } from './voting-routing.module';
import { VotingComponent } from './voting/voting.component';


@NgModule({
  imports: [
    SharedModule,
    VotingRoutingModule
  ],
  declarations: [VotingComponent]
})
export class VotingModule { }
