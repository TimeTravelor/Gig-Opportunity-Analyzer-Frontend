import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent {
  isValid:boolean = false
  onCreateBlock(){
    this.isValid = true
  }
}
