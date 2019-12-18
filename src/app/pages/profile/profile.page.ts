import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private usr = {
    "name":"Jimmy",
    "surname":"Avae",
    "birth":"23",
    "nationality":"",
    "city":"Grenoble",
    "country":"France",
    "pseudo":"YiMiJ",
    "size":"170",
    "weight":"85",
    "studies":"",
    "punchline":"T'as perdu ! Ehhhh Ouais !"
  };
  private _edition: boolean;

  constructor(private route: Router, private toastController: ToastController, public alertController: AlertController) { }

  ngOnInit() {
  }

  get name() : string {
    return this.usr.name;
  }

  set name(name : string) {
    this.usr.name = name;
  }

  get surname() : string {
    return this.usr.surname;
  }

  set surname(surname : string) {
    this.usr.surname = surname;
  }

  get nationality() : string {
    return this.usr.nationality;
  }

  set nationality(nationality : string) {
    this.usr.nationality = nationality;
  }

  get city() : string {
    return this.usr.city;
  }

  set city(city : string) {
    this.usr.city = city;
  }

  get pseudo() : string {
    return this.usr.pseudo;
  }

  set pseudo(pseudo : string) {
    this.usr.pseudo = pseudo;
  }

  get size() : string {
    return this.usr.size;
  }

  set size(size : string) {
    this.usr.size = size;
  }

  get weight() : string {
    return this.usr.weight;
  }

  set weight(weight : string) {
    this.usr.weight = weight;
  }

  get studies() : string {
    return this.usr.studies;
  }

  set studies(studies : string) {
    this.usr.studies = studies;
  }

  get punchline() : string {
    return this.usr.punchline;
  }

  set punchline(punchline : string) {
    this.usr.punchline = punchline;
  }

  get birth() : string {
    return this.usr.birth;
  }

  get country() : string {
    return this.usr.country;
  }

  set country(country : string) {
    this.usr.country = country;
  }

  goToFightSwipe(){
    this.route.navigate(['/tabs']);
  }

  editProfil(esurname : string, ename : string, enationality : string, ecity : string, 
    ecountry : string, epseudo : string, esize : string, eweight : string, 
    estudies : string, epunchline : string) {
      if(esurname == "") {
        this.toast("Le champ 'nom' est obligatoire.");
      }
      else if(ename == "") {
        this.toast("Le champ 'prénom' est obligatoire.");
      }
      else if(ecity == "") {
        this.toast("Le champ 'city' est obligatoire.");
      }
      else if(epseudo == "") {
        this.toast("Le champ 'pseudo' est obligatoire.");
      }
      else if(ecountry == "") {
        this.toast("Le champ 'pays' est obligatoire.");
      }
      else if(esize == "") {
        this.toast("Le champ 'taille' est obligatoire.");
      }
      else if(eweight == "") {
        this.toast("Le champ 'weight' est obligatoire.");
      }
      else {
        this.surname = esurname;
        this.name = ename;
        this.nationality = enationality;
        this.city = ecity;
        this.country = ecountry;
        this.pseudo = epseudo;
        this.size = esize;
        this.weight = eweight;
        this.studies = estudies;
        this.punchline = epunchline;
        this.edition();
      }
  }

  edition() {
    let profil = document.getElementsByClassName("profil");
    let edit = document.getElementsByClassName("edit");
    if(this._edition) {
      for (let i = 0; i < profil.length; i++) {
        profil[i].setAttribute("style", "display:block");
        edit[i].setAttribute("style", "display:none");
      }
      this._edition = false;
    }
    else {
      for (let i = 0; i < profil.length; i++) {
        profil[i].setAttribute("style", "display:none");
        edit[i].setAttribute("style", "display:block");
      }
      this._edition = true;
    }
  }

  option() {
    let profil = document.getElementsByClassName("profil");
    let option = document.getElementsByClassName("option");
    if(this._edition) {
      for (let i = 0; i < profil.length; i++) {
        profil[i].setAttribute("style", "display:block");
        option[i].setAttribute("style", "display:none");
      }
      this._edition = false;
    }
    else {
      for (let i = 0; i < profil.length; i++) {
        profil[i].setAttribute("style", "display:none");
        option[i].setAttribute("style", "display:block");
      }
      this._edition = true;
    }
  }

  back() {
    let profil = document.getElementsByClassName("profil");
    let option = document.getElementsByClassName("option");
    let edit = document.getElementsByClassName("edit");
    
    for (let i = 0; i < profil.length; i++) {
      profil[i].setAttribute("style", "display:block");
      option[i].setAttribute("style", "display:none");
      edit[i].setAttribute("style", "display:none")
    }
    
    this._edition = false;
  }

  forFun : boolean = false;
  forFunFunc() {
    let to = document.getElementById("toggle");
    to.setAttribute("checked", "false");
    this.toast("pense à le dev mec ... ")
  }

  async toast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      cssClass: "text-align: center"
    });
    toast.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Déconnexion',
      message: 'Voulez-vous vraiment vous déconnecter ?',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Oui',
          handler: () => {
            this.route.navigate(['/']);
          }
        }
      ]
    });
    await alert.present();
  }
}
