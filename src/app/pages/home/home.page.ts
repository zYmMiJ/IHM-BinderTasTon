import { Component, Inject, forwardRef } from '@angular/core';
import { CardProfileComponent } from '../../shared/card-profile/card-profile.component';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(public cardcomp:CardProfileComponent,public alertController: AlertController) {}


swipeLeft(e){
  let card = document.getElementById("swipecard");
  this.triggerEvent(card, 'swipeLeftperso');
 }
 swipeRight(e){
  let card = document.getElementById("swipecard");
  this.triggerEvent(card, 'swipeRightperso');
 }

 triggerEvent(el, type){
    // modern browsers, IE9+
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, false, true);
    el.dispatchEvent(e);
   }

   async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Super Match!',
      message: 'Êtes vous sûrs?',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Oui',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
