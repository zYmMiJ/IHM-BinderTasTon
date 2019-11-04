import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  fightState(){
    let sleep = document.querySelector('.sleepState');
    sleep.classList.toggle('is-invisible');
    let fight = document.querySelector('.fightState');
    fight.classList.toggle('is-invisible');
  }
}
