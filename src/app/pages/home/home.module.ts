import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SharedModule } from '../../shared/shared.module';
import { CardProfileComponent } from '../../shared/card-profile/card-profile.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers:[CardProfileComponent],
  declarations: [HomePage] 
})
export class HomePageModule {

  constructor(){}
  
  
}
