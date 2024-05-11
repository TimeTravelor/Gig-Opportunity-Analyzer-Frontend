import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent {
  constructor(){}
  selectedProduct:string | undefined;
  getProductValue(val: any){
    console.log(val.target.value)
    this.selectedProduct = val.target.value;
  }
}
