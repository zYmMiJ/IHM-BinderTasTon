import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  goToFightSwipe(){
    this.route.navigate(['/tabs']);
  }
  goToProfile(){
    this.route.navigate(['/profile']);
  }
}
