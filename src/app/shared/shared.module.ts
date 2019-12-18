import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CardProfileComponent } from './card-profile/card-profile.component';


@NgModule({
  imports: [
    CommonModule, 
    IonicModule
  ],
  declarations: [
    FooterComponent,  
    HeaderComponent, 
    CardProfileComponent
  ],
  exports: [
    FooterComponent, 
    HeaderComponent,  
    CardProfileComponent
  ]
})
export class SharedModule {}