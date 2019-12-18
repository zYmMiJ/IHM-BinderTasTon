import { Component, OnInit } from '@angular/core';
import { delay } from 'q';
import { ModalController } from '@ionic/angular';
import { ViewDetailsPage } from 'src/app/components/view-details/view-details.page';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.scss'],
})
export class CardProfileComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  swipeLeft:boolean;
  swipeRight:boolean;
 
  right:number=0;
  inc:number = 0;
  x:number;
  init:number =0;
  name:string="Nom Prénom";
  user = [
  {
    nom: 'Booba',
    prenom: 'Duc',
    pseudo: 'B20BA',
    genre: 'Homme',
    record: '10-0-0',
    metier:'Rappeur',
    region:'Paris',
    age: 42,
    poids: 110,
    taille: 192,
    honor: 2,
    nationalite : 'Français',
    etudes : 'BEP',
    activites : 'Musculation / Rap',
    punchline: 'On trinque à nos balafres, à nos crochets tous les soirs.',
    photo : '../../assets/img/user/booba-.jpg'
  },
  {
    nom: 'Kévin',
    prenom: 'Le RaJeu',
    age: 21,
    poids: 62,
    taille: 165,
    honor: 2,
    nationalite : 'Français',
    etudes : 'Bac STMG',
    activites : 'Jeux vidéo',
    punchline: 'T nul, j’te re tourn !',
    photo : '../../assets/img/user/kevin.jpg'
  },
  {
    nom: 'Ben Fredj',
    prenom: 'Sadok',
    pseudo: 'VnR',
    age: 23 ,
    poids: 74 ,
    taille: 175 ,
    honor: 2,
    nationalite : 'Français',
    etudes : 'Informatique',
    activites : 'Jeux vidéo',
    punchline: 'Maramé j’vé le r’tourn !',
    photo : '../../assets/img/user/sadok.jpg'
  },
  {
    nom: 'Le VnR',
    prenom: 'Sadok',
    pseudo: 'VnR',
    age: 23 ,
    poids: 74 ,
    taille: 175 ,
    honor: 2,
    nationalite : 'Français',
    etudes : 'Informatique',
    activites : 'Jeux vidéo',
    punchline: 'Maramé j’vé le r’tourn !',
    photo : '../../assets/img/user/sadok.png'
  },
  {
    nom: 'Zi Dormeur',
    prenom: 'Sadok',
    pseudo: 'Dodo',
    age: 23 ,
    poids: 74 ,
    taille: 175 ,
    honor: 2,
    nationalite : 'Français',
    etudes : 'Informatique',
    activites : 'Jeux vidéo',
    punchline: 'Maramé j’vé le r’tourn !',
    photo : '../../assets/img/user/sadok2.jpg'
  },
  {
    nom: 'GauT',
    prenom: 'Nico',
    pseudo: 'Nizok Zi Ivrogne',
    genre: 'Homme',
    record: '10-0-0',
    metier:'Footballeur',
    region:'Paris',
    age: 42,
    poids: 110,
    taille: 192,
    honor: 2,
    nationalite : 'Français',
    etudes : 'BEP',
    activites : 'Musculation / Rap',
    punchline: 'bla dae dafe dzrr!!! A boaire',
    photo : '../../assets/img/user/nicolas.jpg'
  },
  {
    nom: 'Du Pont',
    prenom: 'Frédéric',
    age: 34,
    poids: 75 ,
    taille: 177 ,
    honor: 2,
    nationalite : 'Français',
    etudes : 'Management',
    activites : 'Managers en entreprise',
    punchline: 'Je vais managé ton combat comme je vais manger ton repas !',
    photo : '../../assets/img/user/fred.jpg'
  },
  {
    nom: 'Booba',
    prenom: 'Duc',
    age: 42,
    poids: 110,
    taille: 192,
    honor: 2,
    nationalite : 'Français',
    etudes : 'BEP vente',
    activites : 'Musculation / Rap',
    punchline: 'On trinque à nos balafres, à nos crochets tous les soirs.',
    photo : '../../assets/img/user/booba-.jpg'
  },
  
  ];
  async generate(){  
    console.log("gcp");
    if( this.inc < this.user.length-1 ){
      this.swipeLeft = true;
    }
  }
  swiperight(e){
    console.log("swiperight",e);
    if( this.inc < this.user.length-1 ){
      this.swipeRight = true;
    }
  }
  flip() {
    let card = document.querySelector('.card-perso');
    let card_face = document.querySelector('.card__face--front');
    card_face.classList.toggle('is-invisible');
    card.classList.toggle('is-flipped');
  } 
  start(e){
    let card = document.getElementById("swipecard");
    this.x =  e.touches[0].clientX-card.offsetLeft;
    this.init = card.offsetLeft;
  }
  move(e){
    let card = document.getElementById("swipecard");
    card.style.left = e.changedTouches[0].clientX-this.x+"px";
    this.right=e.changedTouches[0].clientX-this.x;
  }
  async end(e){
    let card = document.getElementById("swipecard");
    if(!this.swipeLeft && !this.swipeRight){       
      card.style.left =  this.init+"px";
    }else if(this.swipeRight){
      console.log("swipeRight");
      this.swipeRight = false;
      card.classList.toggle('out');
      card.classList.toggle('fade-out');
      card.style.left =  card.offsetWidth+"px";
      await delay(100);
      this.inc ++;
      card.style.left =  -this.init-card.offsetWidth+"px";
      await delay(100);
      card.style.left =  0+"px";
      card.classList.toggle('fade-in');
      await delay(100);
      card.classList.remove('out','fade-in','fade-out');
    }else{
      console.log("swipeLeft");
      this.swipeLeft = false;
      card.classList.toggle('out');
      card.classList.toggle('fade-out');
      card.style.left =  -card.offsetWidth+"px";
      await delay(100);
      this.inc ++;
      card.style.left =  this.init+card.offsetWidth+"px";
      await delay(100);
      card.style.left =  this.init+"px";
      card.classList.toggle('fade-in');
      await delay(100);
      card.classList.remove('out','fade-in','fade-out');
      
    }
  }

  async defaultSwipeLeft(){
    let card = document.getElementById("swipecard");
    this.swipeLeft = false;
    card.classList.toggle('out');
    card.classList.toggle('fade-out');
    card.style.left =  -card.offsetWidth+"px";
    await delay(100);
    this.inc ++;
    card.style.left =  this.init+card.offsetWidth+"px";
    await delay(100);
    card.style.left =  this.init+"px";
    card.classList.toggle('fade-in');
    await delay(100);
    card.classList.remove('out','fade-in','fade-out');
  }
  
  async defaultSwipeRight(){
    console.log("defaultSwipeRight");
    let card = document.getElementById("swipecard");
    this.swipeRight = false;
    card.classList.toggle('out');
    card.classList.toggle('fade-out');
    card.style.left =  card.offsetWidth+"px";
    await delay(100);
    this.inc ++;
    card.style.left =  -this.init-card.offsetWidth+"px";
    await delay(100);
    card.style.left =  0+"px";
    card.classList.toggle('fade-in');
    await delay(100);
    card.classList.remove('out','fade-in','fade-out');
  }
   
  async presentModal() {
  const modal = await this.modalController.create({
    component: ViewDetailsPage
  });
  return await modal.present();
  }
}
