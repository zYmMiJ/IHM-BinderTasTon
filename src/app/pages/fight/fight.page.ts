import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.page.html',
  styleUrls: ['./fight.page.scss'],
})
export class FightPage implements OnInit {

  constructor(public alertController: AlertController,private route: Router) { }

  ngOnInit() {
  }

  async victoryAlert() {
    const alert = await this.alertController.create({
      header: 'Soumission Résultat',
      subHeader: 'Victoire',
      message: 'Vous vous déclarez vainqueur',
      buttons: ['OK']
    });

    await alert.present();
  }
  async defeatAlert() {
    const alert = await this.alertController.create({
      header: 'Soumission Résultat',
      subHeader: 'Défaite',
      message: 'Vous vous déclarez perdant',
      buttons: ['OK']
    });

    await alert.present();
  }
  async fuiteAlert() {
    const alert = await this.alertController.create({
      header: 'Soumission Résultat',
      subHeader: 'Abandon',
      message: 'Lache !!!',
      buttons: ['OK']
    });

    await alert.present();
  }
  async victory() {
    const alert = await this.alertController.create({
      message: 'Victoire',
      buttons: ['OK']
    });

    await alert.present();
  }
  async defeat() {
    const alert = await this.alertController.create({
      message: 'Défaite',
      buttons: ['OK']
    });

    await alert.present();
  }
  async fuite() {
    const alert = await this.alertController.create({
      message: 'Lache !!!',
      buttons: ['OK']
    });

    await alert.present();
  }
  connection() {
    this.route.navigate(['/connection']);
  }
}
