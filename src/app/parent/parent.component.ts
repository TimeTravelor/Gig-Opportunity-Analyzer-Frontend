import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  
  proSelected:boolean = false;
  selProduct!: string;
  addedProduct:any;
  //myText = "Search Products .....";

  onSelectProduct(product: string){
    this.proSelected = true;
    this.selProduct = product;
  }

  onAddedProduct(proData: any){
    this.addedProduct = proData;
  }
}
