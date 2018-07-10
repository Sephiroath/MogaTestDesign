import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowworksRoutingModule } from './howworks-routing.module';
import { HowworksComponent } from './howworks/howworks.component';

@NgModule({
  imports: [
    CommonModule,
    HowworksRoutingModule
  ],
  declarations: [HowworksComponent]
})
export class HowworksModule { }
