import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { VotingRoutingModule } from './voting-routing.module';
import { VotingComponent } from './voting/voting.component';
import { MainPoolComponent } from './main-pool/main-pool.component';
import { SpeakOutComponent } from './speak-out/speak-out.component';
import { OtherPoolsComponent } from './other-pools/other-pools.component';
import { PoolSuggestionsComponent } from './pool-suggestions/pool-suggestions.component';
import { OtherPoolsService } from './other-pools/other-pools.service';


@NgModule({
  imports: [
    SharedModule,
    VotingRoutingModule
  ],
  declarations: [VotingComponent, MainPoolComponent, SpeakOutComponent, OtherPoolsComponent, PoolSuggestionsComponent],
  providers: [OtherPoolsService]
})
export class VotingModule { }
