import { Component } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent {
  myStyle1:string = "15px"
  isActive:boolean = false
  mltclass = {class1: true, class2: false, class3: true}
  mltstyle = {'background': 'purple' , 'border': '30px green'}
}
