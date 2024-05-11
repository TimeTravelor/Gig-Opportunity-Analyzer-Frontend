import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  //@Input()
  //placeholderText: string = "abc";

  @Input() selectedProduct!: string;
  @Input() productSelected:boolean = false;
  @Output() addedProduct = new EventEmitter<any>();

  onAddProduct(){
    this.addedProduct.emit(this.selectedProduct);
  }
}
