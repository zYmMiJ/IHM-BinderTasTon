import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MessagesPage } from './messages.page';
import {MessComponent} from '../../components/mess/mess.component';
import {FilActComponent} from '../../components/fil-act/fil-act.component';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: MessagesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MessagesPage, MessComponent, FilActComponent]
})
export class MessagesPageModule {}
