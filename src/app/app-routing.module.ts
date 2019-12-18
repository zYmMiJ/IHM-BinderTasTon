import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/connection/connection.module#ConnectionPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule'},
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'messages', loadChildren: './pages/messages/messages.module#MessagesPageModule' },
  { path: 'fight', loadChildren: './pages/fight/fight.module#FightPageModule' },
  { path: 'connection', loadChildren: './pages/connection/connection.module#ConnectionPageModule' },
  { path: 'match', loadChildren: './pages/match/match.module#MatchPageModule' },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
