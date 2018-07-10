import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowworksComponent } from './howworks/howworks.component';

const routes: Routes = [
  {
    path: '',
    component: HowworksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowworksRoutingModule { }
