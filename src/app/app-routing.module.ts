import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {DiscussPage} from "./pages/discuss/discuss.page";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    
  },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'messages', loadChildren: './pages/messages/messages.module#MessagesPageModule' },
  { path: 'fight', loadChildren: './pages/fight/fight.module#FightPageModule' },
  { path: 'discuss/:id', loadChildren: './pages/discuss/discuss.module#DiscussPageModule'}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
