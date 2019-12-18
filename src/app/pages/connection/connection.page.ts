import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
})
export class ConnectionPage implements OnInit {

  private _minDate : string;
  private _maxDate : string;

  constructor(private route: Router, private toastController: ToastController) {
    let currentDate : Date = new Date();
    
    currentDate.setFullYear(currentDate.getFullYear() - 18);
    this._maxDate = formatDate(currentDate, 'yyyy-MM-dd', "en");

    currentDate.setFullYear(currentDate.getFullYear() - 52);
    this._minDate = formatDate(currentDate, 'yyyy-MM-dd', 'en');
   }

  ngOnInit() {
  }

  get maxDate() : string {
    return this._maxDate;
  }

  get minDate() : string {
    return this._minDate;
  }
 
  back() {
    document.getElementById("forgotPsw").style.display = "none";
    document.getElementById("newAccount").style.display = "none";
    document.getElementById("connexion").style.display = "block";
  }

  forgotPsw() {
    document.getElementById("connexion").style.display = "none";
    document.getElementById("forgotPsw").style.display = "block";
  }

  newAccount() {
    document.getElementById("connexion").style.display = "none";
    document.getElementById("newAccount").style.display = "block";
  }

  connexion(user : string, mdp: string) {
    if(this.checkUser(user, mdp)) {
      this.route.navigate(['/home']);
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

  resetPsw(email : string) {
    if(email == "") {
      this.toast("Veuillez entrer votre adresse email ou votre numéro de téléphone");
    }
    else {
      this.back();
      this.toast("Vous allez recevoir un lien vous permettant de changer votre mot de passe");
    }
  }

  creatAccount(sname : string, name : string, birth : string, email : string, pseudo : string, city : string, country : string, size : string, weight : string) {
    if(sname == "") {
      this.toast("Le champ 'nom' est obligatoire.");
    }
    else if(name == "") {
      this.toast("Le champ 'prénom' est obligatoire.");
    }
    else if(birth == null) {
      this.toast("Le champ 'date de naissance' est obligatoire.");
    }
    else if(email == "") {
      this.toast("Le champ 'email' est obligatoire.");
    }
    else if(pseudo == "") {
      this.toast("Le champ 'pseudo' est obligatoire.");
    }
    else if(city == "") {
      this.toast("Le champ 'ville' est obligatoire.");
    }
    else if(country == "") {
      this.toast("Le champ 'pays' est obligatoire.");
    }
    else if(size == "") {
      this.toast("Le champ 'taille' est obligatoire.");
    }
    else if(weight == "") {
      this.toast("Le champ 'weight' est obligatoire.");
    }
    else {
      this.back();
      this.toast("Votre compte a été créé avec succès");
    }
  }

  async toast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      cssClass: "text-align: center"
    });
    toast.present();
  }

  fight() {
    this.route.navigate(['/fight']);
  }
  match() {
    this.route.navigate(['/match']);
  }
}
