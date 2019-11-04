import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';


import { IonicSwipeAllModule } from 'ionic-swipe-all';
import { SharedModule } from 'src/app/shared/shared.module';







@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonicSwipeAllModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],

  declarations: [Tab1Page]
})
export class Tab1PageModule {}
