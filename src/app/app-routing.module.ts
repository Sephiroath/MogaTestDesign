import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'voting',
  pathMatch: 'full'
},
{
  path: 'voting',
  loadChildren: 'app/voting/voting.module#VotingModule'
},
{
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
