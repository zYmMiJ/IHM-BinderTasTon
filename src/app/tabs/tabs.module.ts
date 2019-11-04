import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { SharedModule } from '../shared/shared.module';
import { CardProfileComponent } from '../shared/card-profile/card-profile.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    SharedModule
  ],
  providers:[CardProfileComponent],
  declarations: [TabsPage] 
})
export class TabsPageModule {

  constructor(){}
  
  
}
