import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { CardProfileComponent } from './card-profile/card-profile.component';

@NgModule({
  imports: [
    CommonModule, 
    IonicModule
  ],
  declarations: [
    HeaderComponent, 
    CardProfileComponent
  ],
  exports: [
    HeaderComponent,  
    CardProfileComponent
  ]
})
export class SharedModule {}