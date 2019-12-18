import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    const shadowDomM = document.querySelector('#shadow-dom-message');
    const shadowDomH = document.querySelector('#shadow-dom-historique');
    shadowDomM.className = 'showed';
    shadowDomH.className = 'hidden';
  }
  goToFightSwipe() {
    this.route.navigate(['/tabs']);
  }
  goToProfile() {
    this.route.navigate(['/profile']);
  }
  segmentC(event) {
    const segmentValue = event.detail.value;
    const shadowDomM = document.querySelector('#shadow-dom-message');
    const shadowDomH = document.querySelector('#shadow-dom-historique');
    if ( segmentValue === 'message'){
      shadowDomM.className = 'showed';
      shadowDomH.className = 'hidden';
    } else {
      shadowDomM.className = 'hidden';
      shadowDomH.className = 'showed';
    }
  }
}
