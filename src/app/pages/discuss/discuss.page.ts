import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {IonContent} from "@ionic/angular";

@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.page.html',
  styleUrls: ['./discuss.page.scss'],
})
export class DiscussPage implements OnInit {

  messages = [
    {
      user: 'Sadok VNR',
      createdAt: 1554090856000,
      msg: 'gros arrete de parler comme ca parce que tu as tes cousins derriere toi je vais te niqué'
    },
    {
      user: 'Booba',
      createdAt: 1554090856000,
      msg: 'Ferme ta Bo.o.ka B2OBA, eeeasy'
    },
    {
      user: 'Sadok VNR',
      createdAt: 1554090856000,
      msg: 'vas-y je te prend même 4 contre 1 !'
    },
    {
      user: 'Booba',
      createdAt: 1554090856000,
      msg: 'aZY mon pote on stape sur le terter'
    },
    {
      user: 'Booba',
      createdAt: 1554090856000,
      msg: 'Jvais te faire manger du carameeeel'
    },
    {
      user: 'Sadok VNR',
      createdAt: 1554090856000,
      msg: 'Vas y tu ma fais peur je rage-quit'
    }
  ]

  currentUser:string = 'Sadok VNR';
  newMsg = '';
  @ViewChild(IonContent, {static: false}) content: IonContent;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToFightSwipe() {
    this.route.navigate(['/tabs']);
  }
  goToProfile() {
    this.route.navigate(['/profile']);
  }

  sendMessage(){
    this.messages.push({
      user: 'Sadok VNR',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });
    this.newMsg = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    }, 10);
  }

}
