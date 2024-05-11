import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent {
  dynName:string = "Hajrah"

  myMethod(){
    return "My name is "+this.dynName
  }

  appStatus:boolean = true;
  status1 = "Online";
  status2 = "Offline";

  enable:boolean = false;  
}
