import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {element} from "protractor";

@Component({
  selector: 'app-mess',
  templateUrl: './mess.component.html',
  styleUrls: ['./mess.component.scss'],
})
export class MessComponent implements OnInit {


  constructor(private route: Router) {
  }

  ngOnInit() {}

  fightHim() {
    this.route.navigate(['/fight']);
  }

  trash(event){
    const elem = event.target;
    const parent = elem.parentElement;
    const grdParent = parent.parentElement;
    const gradgra = grdParent.parentElement;
    gradgra.remove();
  }

  accessToMessage(idroute: string){

    this.route.navigate(['/discuss/', idroute]);
  }
}
