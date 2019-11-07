import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {}

  goToMessage(){
    this.route.navigate(['/messages']);
  }
  goToProfile(){
    this.route.navigate(['/profile']);
  }
  fightState(){
    let sleep = document.querySelector('.sleepState');
    sleep.classList.toggle('is-invisible');
    let fight = document.querySelector('.fightState');
    fight.classList.toggle('is-invisible');
  }
}
