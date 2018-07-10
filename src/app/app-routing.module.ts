import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'voting',
    pathMatch: 'full'
  },
  {
    path: 'voting',
    loadChildren: './voting/voting.module#VotingModule'
  },
  {
    path: 'pasttrials',
    loadChildren: './past-trials/past-trials.module#PastTrialsModule'
  },
  {
    path: 'howitworks',
    loadChildren: './howworks/howworks.module#HowworksModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
