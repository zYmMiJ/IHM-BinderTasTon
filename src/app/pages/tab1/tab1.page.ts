import { Component } from '@angular/core';
import { ModalController,NavController } from '@ionic/angular';
import { ViewDetailsPage } from '../../components/view-details/view-details.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  constructor(public modalController: ModalController,public nav: NavController) {
   
  }

  
  swipeAll(event: any): any {
    console.log('Swipe All', event);
  }

  swipeLeft(e: any): any {
    console.log('Swipe Left', event);
  }
  


  swipeRight(event: any): any {
    console.log('Swipe Right', event);
  }

  swipeUp(event: any): any {
      console.log('Swipe Up', event);
  }

swipeDown(event: any): any {
    console.log('Swipe Down', event);
}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ViewDetailsPage,
      // Données à passer aux modals
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });
    
    return await modal.present();
  }

  
}
