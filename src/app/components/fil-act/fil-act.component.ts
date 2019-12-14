import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fil-act',
  templateUrl: './fil-act.component.html',
  styleUrls: ['./fil-act.component.scss'],
})
export class FilActComponent implements OnInit {
  filact: any[] = [
    {
      oppenentName: 'Sadok',
      avatarMe: '../../../assets/img/user/sadok.png',
      avatarOpponent: '../../../assets/img/user/sadok.jpg',
      isVictory: true,
      createdAt: 1564090856000
    },
    {
      oppenentName: 'El Chiquita',
      avatarMe: '../../../assets/img/user/sadok.png',
      avatarOpponent: '../../../assets/img/user/fred.jpg',
      isVictory: false,
      createdAt: 1594090856000
    },
    {
      oppenentName: 'Le Rajeu Kevin',
      avatarMe: '../../../assets/img/user/sadok.png',
      avatarOpponent: '../../../assets/img/user/kevin.jpg',
      isVictory: false,
      createdAt: 1597090856000
    },
    {
      oppenentName: 'Duc Booba',
      avatarMe: '../../../assets/img/user/sadok.png',
      avatarOpponent: '../../../assets/img/user/booba-.jpg',
      isVictory: true,
      createdAt: 1598090856000
    }
  ];

  constructor() { }

  ngOnInit() {}

  getColor(filact):string{
    if(filact.isVictory === true){
      return 'success';
    } else {
      return 'danger';
    }
  }


}
