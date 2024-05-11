import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent {
  msg:string = "";
  OnAddCart(event: Event){
    const inputElement = event.target as HTMLInputElement;
    this.msg = inputElement.value + " added in Cart!";
  }
  onInputText(event: Event){
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement.value);
  }

  @ViewChild('inputInfo') inputInfo!: ElementRef;
  getInfo() {
    const inputValue = this.inputInfo.nativeElement.value;
    console.log(inputValue);
  }
}
