import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PastTrialsRoutingModule } from './past-trials-routing.module';
import { PastTrialsComponent } from './past-trials/past-trials.component';

@NgModule({
  imports: [
    CommonModule,
    PastTrialsRoutingModule
  ],
  declarations: [PastTrialsComponent]
})
export class PastTrialsModule { }
