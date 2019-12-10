import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
})
export class ConnectionPage implements OnInit {

  constructor(private route: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  connexion(user : string, mdp: string) {
    if(this.checkUser(user, mdp)) {
      this.route.navigate(['/tabs']);
    }
  }

  checkUser(user : string, mdp: string) : boolean {
    if(user === "" && mdp === "") {
      return true;
    }
    else if (user === ""){
      this.toast("Veuillez compléter tous les champs");
    }
    else if (user !== "" && mdp === "") {
      this.toast("mot de passe incorrect")
    }
    else {
      this.toast("l'utilisateur n'existe pas");
    }
    return false;
  }

  async toast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      cssClass: "text-align: center"
    });
    toast.present();
  }

}
