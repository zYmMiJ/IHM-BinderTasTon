import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewDetailsPage } from '../view-details/view-details.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalController: ModalController) {

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
