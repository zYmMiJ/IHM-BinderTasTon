import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiscussPage } from './discuss.page';
import {MessagesPage} from "../messages/messages.page";

const routes: Routes = [
  {
    path: '',
    component: DiscussPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiscussPage]
})
export class DiscussPageModule {}
